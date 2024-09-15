import React from 'react';
import { useGetFeedBackQuery } from '../../Api/feedbackApi';

const UserFeedBack = () => {
  const { data: feedbacks, error, isLoading } = useGetFeedBackQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching feedbacks: {error.message}</div>;
  }

  return (
    <div className="feedback-listcons">
      <h2 className="text-2xl font-bold mb-4">Feedback List</h2>
      {feedbacks && feedbacks.data.length > 0 ? (
        <ul className='grid lg:grid-cols-2 sm:grid-cols-1'>
          {feedbacks.data.map((feedback) => (
            <li key={feedback._id} className="border p-4 mb-4 rounded">
              <p><strong>Name:</strong> {feedback.name}</p>
              <p><strong>Email:</strong> {feedback.email}</p>
              <p><strong>Message:</strong> {feedback.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback found.</p>
      )}
    </div>
  );
};

export default UserFeedBack;
