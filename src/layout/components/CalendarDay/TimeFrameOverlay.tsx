import './TimeFrameOverlay.scss'

type TimeFrameOverlayProps = {
    title: string,
    content: string,
    bgColor?: string,
    top: number,
    height: number,
}

const TimeFrameOverlay = ({title, content, bgColor, top, height}: TimeFrameOverlayProps) => {
    const numberOfLines = Math.round((height - 24)/24)

    return (
        <div className="time-frame-overlay-wrapper" style={{backgroundColor: bgColor, top: `${top}px`, height: `${height}px`}}>
            <div className="time-frame-overlay-title">{title}</div>
            <p className="time-frame-overlay-content" style={{WebkitLineClamp: numberOfLines}}>{content}</p>
        </div>
    )
}

export default TimeFrameOverlay