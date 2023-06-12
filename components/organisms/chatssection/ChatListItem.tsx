import Image from "next/image"
import './ChatsSection.css'

type Props = {}

function ChatListItem({}: Props ) {
  return (
    <div className="chatListItem hoverEffect">
        <div className="circle">
        <Image src="https://lh3.googleusercontent.com/ogw/AOLn63G9RkxTpNsmhZ7H6fId4yB6Abii8VySuY3epxVs=s32-c-mo" alt="" width={40} height={40} />
        </div>
        <div className="middle">
        <div className="usersname">Prosper Yoo Bro</div>
        <div className="peepMessage"> <span>Yoo bro</span>・<span>36m</span></div>
        </div>
        <div className="ending">
        <div className="dot">
        <Image src="https://lh3.googleusercontent.com/ogw/AOLn63G9RkxTpNsmhZ7H6fId4yB6Abii8VySuY3epxVs=s32-c-mo" alt="" width={40} height={40} />
        </div>
        </div>
    </div>
  )
}

export default ChatListItem