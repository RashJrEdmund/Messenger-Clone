import './style.css'

type Props = {
    children: any,
    name?: string, 
    counter?: number, 
    route?: string,
    active?: boolean
};


function MenuItem({ children, name, counter, route, active }: Props) {
    return (
        <div className={`hoverEffect menuItem ${active? `bg-gray-100 rounded` : '' }`}>
            <div className={`menuItem-Icon ${active? `text-black` : 'text-neutral-500'}`}>
                {children}
            </div>
            {name ?
                <div className="menuItem-Text text-black">
                    <div className='menuItem-Title truncate'>{name}</div>
                    {counter ?
                        <div className="menuItem-Counter">
                            {counter > 99 ? '99+' : counter}
                        </div> : <div />}
                </div> : ""
            }
        </div>
    )
}

export default MenuItem

