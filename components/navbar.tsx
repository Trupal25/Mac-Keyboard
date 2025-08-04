

const links= [
    {
        href:"#",
        title:"Login"
    },
    {
        href:"#",
        title:"Pricing"
    },
    {
        href:"#",
        title:"Guide"
    }
]

export const Navbar = () =>{

    return <div className="navbar-root">
        <div className="logo">Fintech</div>
        <div className="links">
            {links.map((link,idx)=>{
               return <a
               className="link-items"
               key={link.title} 
               href={link.href}>{link.title}</a>
            })}
        </div>
        <button className="btn">Start free trial</button>
    </div>
}