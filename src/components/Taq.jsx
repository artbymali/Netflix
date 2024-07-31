import React, { useEffect, useRef } from 'react';
import { IoChevronDown } from "react-icons/io5";

function Faq() {
  const faqRef = useRef(null);

  useEffect(() => {
    const faqs = faqRef.current.querySelectorAll('.tab');

    faqs.forEach(tab => {
      const icon = tab.querySelector('.icon');
      const answer = tab.querySelector('.answer');

      // Remove 'active' class from answer initially
      answer.classList.remove('active');

      tab.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');

        if (icon.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = null;
        }
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      faqs.forEach(tab => {
        tab.removeEventListener('click', () => {
          icon.classList.toggle('active');
          answer.classList.toggle('active');

          if (icon.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          } else {
            answer.style.maxHeight = null;
          }
        });
      });
    };
  }, []);
  


  
  return (
    <div ref={faqRef}>
      <div className="tab">
        <div className="question">
          <h3>What is Netflix</h3>
          <i className='icon'><IoChevronDown /></i>
        </div>
        <div className="answer">
          <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
          <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;

