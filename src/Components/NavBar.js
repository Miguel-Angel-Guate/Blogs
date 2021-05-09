import {Link} from 'react-router-dom'
const NavBar = () => {
    
    return ( 
        <>
        

    <div style={{display: 'flex', alignItems: 'center', }} >
    <h1 style={{marginRight: '15px'}}>The dojo</h1>
        <Link style={{padding: '5px'}} to="/home">Home</Link>
        <Link to="/create">New blog</Link>
    </div>
    
        </>
     );
}
 
export default NavBar;