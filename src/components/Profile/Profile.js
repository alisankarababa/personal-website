import "./Profile.css";

import { page_en } from "../../data/data";

const { profileData } = page_en;

const { basicInfo } = profileData;

export default function Profile() {
	return (
		<div className="profile-wrapper">
			<section className="sec-profile custom-container">
				<h2 className="sec--title" >{profileData.title}</h2>
				<div className="profile">
					<div className="profile__basic-info basic-info">
                        <h3 className="basic-info__title" style={basicInfo.title.style}>{basicInfo.title.text}</h3>
                        <div className="basic-info__items">
                        {
                            basicInfo.info.map( info => {
                                return <div key={info.label} className="basic-info__item"><label>{info.label}</label><span>{info.text}</span></div>
                            })
                        }
                        </div>
                    </div>
					<div className="profile__about-me"></div>
				</div>
			</section>
		</div>
	);
}
