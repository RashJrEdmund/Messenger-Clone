import './style.css'

type Props = { children: any, name: string, counter?: number, route?: string};


function MenuItem({children, name, counter, route}: Props) {
  return (
    <div className="hoverEffect menuItem">
        <div className="menuItem-Icon">
            {children}
        </div>
        <div className="menuItem-Text">
       <div className='menuItem-Title truncate'>{name}</div>
       { counter ? 
       <div className="menuItem-Counter">
        { counter > 9? '9+' : counter}
        </div>  : <div /> }
        </div>
    </div>
  )
}

export default MenuItem

