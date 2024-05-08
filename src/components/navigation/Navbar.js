import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import loading_dots from "../../assets/img/loading_dots.gif";
import logo from "../../assets/img/logo_personal6.png";

function Navbar(){
    return(
        <nav className="w-full py-0 top-0 fixed">
            <div className=" bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <img 
                            src={logo} 
                            width={300}
                            className=""
                        />
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Casos</Link>
                        <Link to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Servicios</Link>
                        <Link to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Nosotros</Link>
                        <Link to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Carreras</Link>
                        <Link to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Blog</Link>
                        <Link to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Contacto</Link>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-color-button px-6 py-2.5 text-lg font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-color-button focus:ring-offset-2"
                        >
                        Contactanos
                        <img src={loading_dots} className="w-3.5 h-1 mt-1 ml-1"></img>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
        
})

export default connect(mapStateToProps, {

})(Navbar);