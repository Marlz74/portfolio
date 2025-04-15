import React, { useState, useRef } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import ApiService from '../../services/ApiService';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Refs for input focusing
  const usernameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setErrMsg('');
    setSuccessMsg('');
    setErrors({});

    const newErrors = {};
    if (!username.trim()) newErrors.username = true;
    if (!phoneNumber.trim()) newErrors.phone = true;
    if (!email.trim()) newErrors.email = 'Email is required!';
    else if (!emailValidation(email)) newErrors.email = 'Invalid Email!';
    if (!subject.trim()) newErrors.subject = true;
    if (!message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first field with error
      if (newErrors.username) return usernameRef.current.focus();
      if (newErrors.phone) return phoneRef.current.focus();
      if (newErrors.email) return emailRef.current.focus();
      if (newErrors.subject) return subjectRef.current.focus();
      if (newErrors.message) return messageRef.current.focus();
      return;
    }

    setLoading(true);
    try {
      ApiService.post({
        endpoint: '/api/sendEmail',
        payload: {
          username,
          phoneNumber,
          email,
          subject,
          message,
        },
        callback: (response) => {
          setLoading(false);
          if (!response) {
            setErrMsg('Failed to send message. Please try again later.');
            return;
          }
          if (response.status) {
            setSuccessMsg(`Thank you dear ${username}, your message has been sent successfully!`);
            setErrMsg('');
            setUsername('');
            setPhoneNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
            setErrors({});
          } else {
            setErrMsg('Failed to send message. Please try again later.');
          }
        },
      });
    } catch (error) {
      setLoading(false);
      setErrMsg('Something went wrong. Please try again later.');
    }
  };

  // Function to handle real-time error clearing
  const handleInputChange = (field, value) => {
    switch (field) {
      case 'username':
        setUsername(value);
        if (value.trim()) setErrors(prev => ({ ...prev, username: false }));
        break;
      case 'phone':
        setPhoneNumber(value);
        if (value.trim()) setErrors(prev => ({ ...prev, phone: false }));
        break;
      case 'email':
        setEmail(value);
        if (emailValidation(value)) setErrors(prev => ({ ...prev, email: false }));
        break;
      case 'subject':
        setSubject(value);
        if (value.trim()) setErrors(prev => ({ ...prev, subject: false }));
        break;
      case 'message':
        setMessage(value);
        if (value.trim()) setErrors(prev => ({ ...prev, message: false }));
        break;
      default:
        break;
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}

              {/* Top Two Inputs */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                    ref={usernameRef}
                    value={username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className={`contactInput ${errors.username ? 'border border-red-500' : ''}`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    ref={phoneRef}
                    value={phoneNumber}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`contactInput ${errors.phone ? 'border border-red-500' : ''}`}
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  ref={emailRef}
                  value={email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`contactInput ${errors.email ? 'border border-red-500' : ''}`}
                  type="email"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  ref={subjectRef}
                  value={subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={`contactInput ${errors.subject ? 'border border-red-500' : ''}`}
                  type="text"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  ref={messageRef}
                  value={message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`contactTextArea ${errors.message ? 'border border-red-500' : ''}`}
                  rows="8"
                ></textarea>
              </div>

              {/* Button */}
              <div className="w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-12 bg-[#141518] rounded-lg text-base tracking-wider uppercase duration-300 border border-transparent flex items-center justify-center gap-2 ${loading ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:border-designColor'}`}
                >
                  {loading && (
                    <span className="inline-block h-5 w-5 border-2 border-t-transparent border-gray-400 rounded-full animate-spin"></span>
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
