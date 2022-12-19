import './TimeFrameOverlay.scss'

type TimeFrameOverlayProps {
    title?: string,
    content?: string,
}

const TimeFrameOverlay = ({title, content}: TimeFrameOverlayProps) => {
    return (
        <div className="time-frame-overlay-wrapper" >
            <div className="time-frame-overlay-title">Title {title}</div>
            <p className="time-frame-overlay-content">Meeting in the office! {content}</p>
        </div>
    )
}

export default TimeFrameOverlay