import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';

const ShareUI = () => {
    const shareUrl = window.location.href; 
    const title = "Apply this job now!";
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {/* Facebook Share Button */}
            <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={40} round />
            </FacebookShareButton>

            {/* Twitter Share Button */}
            <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={40} round />
            </TwitterShareButton>

            {/* WhatsApp Share Button */}
            <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>

            {/* LinkedIn Share Button */}
            <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={40} round />
            </LinkedinShareButton>

            {/* Email Share Button */}
            <EmailShareButton url={shareUrl} subject={title} body="Check this out!">
                <EmailIcon size={40} round />
            </EmailShareButton>
        </div>

    )
}

export default ShareUI
