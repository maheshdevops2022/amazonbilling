import React from "react";
import "../Assets/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="contact-page">
        <div className="contact-header">
          <span>CONTACT US</span>

          <h1>
            Let's <span className="green">Optimize</span> Together
          </h1>

          <p>
            Ready to transform your cloud economics? Get in touch with our
            FinOps experts for a free consultation and discover how much you
            could be saving.
          </p>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <h4>info@c3ops.io</h4>
            <p>Get in touch for consultations and support</p>
          </div>

          <div className="contact-card">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <h3>Call Us</h3>
            <h4>+91 9390361519</h4>
            <p>Mon-Fri, 9AM-6PM (IST & PST)</p>
          </div>

          <div className="contact-card">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Visit Us</h3>
            <h4>Hyderabad</h4>
            <p>Telangana, India - Our Global Office</p>
          </div>

          <div className="contact-card">
            <div className="icon">
              <FaCalendarAlt />
            </div>
            <h3>Schedule a Call</h3>
            <h4>Book a Free Consultation</h4>
            <p>30-Min FinOps Assessment Available Monday-Friday</p>
          </div>
        </div>
      </div>

      {/* Free Assessment */}
      <div className="card-container">
        <h1>
          Get Your <span>Free</span> FinOps Assessment
        </h1>

        <p>
          Click the button below to start your free FinOps assessment.
        </p>

        <button>Get Your Free FinOps Assessment</button>

        <div className="services-grid">
          <div className="service-card">
            <h6>FinOps Assessment</h6>
            <p>Comprehensive analysis of your cloud spend.</p>
            <span>Duration: 2-4 Weeks</span>
          </div>

          <div className="service-card">
            <h6>Platform Implementation</h6>
            <p>Deploy our FinOps platform and automation.</p>
            <span>Duration: 6-12 Weeks</span>
          </div>

          <div className="service-card">
            <h6>Team Training</h6>
            <p>FinOps certification and best practices training.</p>
            <span>Duration: 4-8 Weeks</span>
          </div>

          <div className="service-card">
            <h6>Ongoing Support</h6>
            <p>24/7 monitoring and optimization guidance.</p>
            <span>Duration: Ongoing</span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="questions">
        <div>
          <h6>How quickly can we see cost savings?</h6>
          <p>Most clients see savings within 30-90 days.</p>
        </div>

        <div>
          <h6>Do you work with all cloud providers?</h6>
          <p>AWS, Azure, GCP and multi-cloud environments.</p>
        </div>

        <div>
          <h6>What's included in the free assessment?</h6>
          <p>Cloud spend review, optimization roadmap and recommendations.</p>
        </div>

        <div>
          <h6>How does pricing work?</h6>
          <p>Flexible pricing based on your requirements.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;