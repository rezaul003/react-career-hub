
const Footer = () => {
    return (
        <footer className=" bg-[#1A1919] text-base-content text-slate-400 p-10">
            <div className="footer max-w-6xl mx-auto">
                <aside>

                    <h2 className="font-bold text-xl text-white">CareerHub</h2>
                    <p>There are many variations of passages<br /> 
                        of Lorem Ipsum , but the majority have<br />
                        suffered alteration in some form.</p>
                </aside>


                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
               
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 978 5570</p>
                  
                </nav>
            </div>
        </footer>
    );
};

export default Footer;