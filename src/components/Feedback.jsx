import { useState } from 'react';
import { Text } from '@chakra-ui/react'
import * as amplitude from '@amplitude/analytics-browser';
const AMPLITUDE_API_KEY = "986ab970a868fbebc01877a2b9d342ab"
amplitude.init(AMPLITUDE_API_KEY, {
    defaultTracking: true,
});

const Feedback = () => {
    const [feedbackType, setFeedbackType] = useState('General');
    const [feedback, setFeedback] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [responseColor, setResponseColor] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
            feedbackType,
            feedback,
            entityId: '3fa85f64-5717-4562-b3fc-2c963f66afa6' // hardcoded because my app doesn't register users IDs (this is taken from the api example)
        };
        
        try {
            const response = await fetch('https://wizard-world-api.herokuapp.com/Feedback', {
                method: 'POST',
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json-patch+json'
                },
                body: JSON.stringify(requestData)
            });
            if (response.ok) {
                setResponseMessage('Feedback successfully sent!');
                setResponseColor('green_text');
                amplitude.track('Submit Feedback', { 
                    feedbackType: requestData.feedbackType,
                    status: 'success'
                });
            } else {
                setResponseMessage('Error sending feedback :(');
                setResponseColor('red_text');
                amplitude.track('Submit Feedback', { 
                    feedbackType: requestData.feedbackType,
                    status: 'error'
                });
            }
        } catch (error) {
            setResponseMessage('Error al enviar feedback: ' + error.message);
        }
    };

    return (
        <>
        <div className='feedback__container'>
            <Text className='feedback__title'>Send us your Feedback!🧙‍♂️</Text>
            <form className='feedback__card' onSubmit={handleSubmit}>
                <div>
                    <label className='feedback__card__text'>Select your type of feedback: </label>
                    <select className='feedback__card__select' value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)}>
                        <option value="General">General</option>
                        <option value="Bug">Bug</option>
                        <option value="DataError">DataError</option>
                        <option value="Suggestion">Suggestion</option>
                    </select>
                </div>
                <label className='feedback__card__text'>Feedback:</label>
                <div>
                    <textarea placeholder="Write something here..." className='feedback__card__textarea' value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                </div>
                <button className='feedback__button' type='submit'>Send</button>
            </form>
            {responseMessage && <p className={`feedback__response ${responseColor}`}>{responseMessage}</p>}
        </div>
        </>
    );
};

export default Feedback;