import './SingleApplication.css';

import { FaRegStar } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaDocker } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { PiCakeBold } from 'react-icons/pi';
import { IoBookOutline } from 'react-icons/io5';
import { PiNotepad } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { GoStack } from 'react-icons/go';
import { PiGraduationCapLight } from 'react-icons/pi';
import { BsFiletypePdf } from 'react-icons/bs';
import { LuDownload } from 'react-icons/lu';
import { BsGlobe } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import useModalContext from '../../context/ModalContext';

const SingleApplication = () => {
  const { setOpenModal } = useModalContext();

  return (
    <div className='single-app-parent-container'>
      <div className='single-app-main-container'>
        <div className='single-app-details-container'>
          <div className='single-app-profile-container'>
            <div className='single-app-profile-img-container'></div>
            <div className='single-app-profile-name-container'>
              <h3 className='profile-name'>Esther Howard</h3>
              <p className='designation'>Website Designer (UI/UX)</p>
            </div>
          </div>
          <div className='single-app-star-email-container'>
            <div className='single-app-star-container'>
              <FaRegStar className='single-star-icon' />
            </div>
            <button className='mail-btn'>
              <FiMail /> Send Mail
            </button>
            <button className='hire-btn'>
              <FaRegArrowAltCircleRight /> Hire Candidates
            </button>
          </div>
        </div>
        <div className='single-app-grid-container'>
          <div className='single-app-content-container'>
            <div className='single-app-biography-container'>
              <h3 className='biography-text'>BIOGRAPHY</h3>
              <p className='biography-description'>
                I've been passionate about graphic design and digital art from
                an early age with a keen interest in Website and Mobile
                Application User interfaces. I can create high-quality and
                aesthetically pleasing designs in a quick turnaround time. Check
                out the portfolio section of my profile to see samples of my
                work and feel free to discuss your designing needs. I mostly use
                Adobe Photoshop, Illustrator, XD and Figma. Website User
                Experience and Interface (UI/UX) Design - for all kinds of
                Professional and Personal websites. Mobile Application User
                Experience and Interface Design - for all kinds of IOS/Android
                and Hbrid Mobile Applications. Wireframe Designs.
              </p>
            </div>
            <div className='single-app-cover-letter-container'>
              <h3 className='biography-text'>COVER LETTER</h3>
              <p className='biography-description'>
                I am writing to express my interest in the fourth grade
                instructional position that is currently available in the Foort
                Wayne Community School Syystek. I learned of the opening through
                a noice posted on JobZone. IPFW's job database. I am confident
                that my academic background and curriculum development skills
                would be successfully utilized in this teaching posiiton.
              </p>
              <p className='biography-description'>
                I have just completed my Bachelor of Science degree in
                Elementary Education and have successfully completed Praxis |
                and Praxis ||. During my student teaching experience. I
                developed and initiated a three-week curriiculum sequence on
                animal species and earth resources. This collaborative unit
                involved working with three other third grade teachers within my
                team and culminated in afield trip to the Indianapolis Zo Animal
                Reseach Unit
              </p>
              <p className='biography-description'>Sincerely,</p>
              <p className='biography-description'>Esther Howard</p>
            </div>
            <div className='single-app-social-media-parent-container'>
              <p className='media-text'>Follow me Social Media</p>
              <div className='single-app-social-media-container'>
                <div className='single-app-media-icon-container'>
                  <FaFacebookF />
                </div>
                <div className='single-app-media-icon-container'>
                  <FaTwitter />
                </div>
                <div className='single-app-media-icon-container'>
                  <FaLinkedinIn />
                </div>
                <div className='single-app-media-icon-container'>
                  <FaDocker />
                </div>
                <div className='single-app-media-icon-container'>
                  <FaInstagram />
                </div>
                <div className='single-app-media-icon-container'>
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
          <div className='single-app-icons-container'>
            <div className='single-app-date-container'>
              <div className='single-app-info-container'>
                <PiCakeBold className='single-app-icon' />
                <p className='birth-date-text'>DATE OF BIRTH</p>
                <p className='birth-date'>14 June, 2021</p>
              </div>
              <div className='single-app-info-container'>
                <IoBookOutline className='single-app-icon' />
                <p className='birth-date-text'>NATIONALITY</p>
                <p className='birth-date'>India</p>
              </div>
              <div className='single-app-info-container'>
                <PiNotepad className='single-app-icon' />
                <p className='birth-date-text'>MARITAL STATUS</p>
                <p className='birth-date'>Single</p>
              </div>
              <div className='single-app-info-container'>
                <CgProfile className='single-app-icon' />
                <p className='birth-date-text'>GENDER</p>
                <p className='birth-date'>Male</p>
              </div>
              <div className='single-app-info-container'>
                <GoStack className='single-app-icon' />
                <p className='birth-date-text'>EXPERIENCE</p>
                <p className='birth-date'>7 Years</p>
              </div>
              <div className='single-app-info-container'>
                <PiGraduationCapLight className='single-app-icon' />
                <p className='birth-date-text'>EDUCATION</p>
                <p className='birth-date'>Master Degree</p>
              </div>
            </div>
            <div className='single-app-resume-container'>
              <h3 className='resume-heading'>Download My Resume</h3>
              <div className='single-app-pdf-download-container'>
                <div className='pdf-container'>
                  <BsFiletypePdf className='pdf-icon' />
                  <div className='single-app-pdf-container'>
                    <p className='single-app-name'>Esther Howard</p>
                    <p className='pdf-text'>PDF</p>
                  </div>
                  <div className='single-app-download-container'>
                    <LuDownload className='single-app-download-icon' />
                  </div>
                </div>
              </div>
            </div>
            <div className='single-app-contact-info-container'>
              <p className='contact-info-text'>Contact Information</p>
              <div className='single-app-website-container'>
                <BsGlobe className='globe-icon' />
                <div className='single-app-website-content-container'>
                  <p className='website-text'>WEBSITE</p>
                  <p className='url-text'>www.estharhoward.com</p>
                </div>
              </div>
              <div className='single-app-location-container'>
                <div className='app-location-container'>
                  <HiOutlineLocationMarker className='globe-icon' />
                  <div className='single-app-website-content-container'>
                    <p className='website-text'>LOCATION</p>
                    <p className='url-text'>Beverly Hills, California 90202</p>
                  </div>
                </div>
                <p className='app-location-address'>
                  Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='single-app-close-btn-container'
        onClick={() => setOpenModal(false)}
      >
        <IoMdClose />
      </div>
    </div>
  );
};

export default SingleApplication;
