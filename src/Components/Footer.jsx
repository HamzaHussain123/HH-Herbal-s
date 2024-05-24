const Footer = () => {
    return (
        <>
            <div className="container-fluid Footer py-4">
                <div className="container">
                    <div className="row gx-0 py-4 align-items-center">
                        <div className="col-md-3">
                            <h2>HH HERBAL'S</h2>
                        </div>
                        <div className="col-md-6 py-4 py-md-0">
                            <ul className="Footer_nav mx-auto d-lg-flex mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/products">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutus">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end align-items-center">
                            <div className="Footer_icons">
                                <ul className="socail-media">
                                    <li>
                                        <a href="https://www.facebook.com/people/HH-Herbal-Oil/100094415846758/?mibextid=qi2Omg&rdid=md15oMRSjrm59mmU" target="_blank">
                                            <svg viewBox="0 0 10.712 20" height="20" width="10.712" xmlns="http://www.w3.org/2000/svg">
                                                <path transform="translate(-22.89)" d="M32.9,11.25l.555-3.62H29.982V5.282a1.81,1.81,0,0,1,2.041-1.955H33.6V.245A19.255,19.255,0,0,0,30.8,0c-2.86,0-4.73,1.734-4.73,4.872V7.63H22.89v3.62h3.179V20h3.913V11.25Z" id="facebook"></path>
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/hhherbalhairoil/?igsh=MW1pd3BxeGxpaWxtaQ%3D%3D" target="_blank">
                                            <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" id="instagram">
                                                <g transform="translate(15.354 3.707)" data-name="Group 64" id="Group_64">
                                                    <g data-name="Group 63" id="Group_63">
                                                        <path fill="#00" transform="translate(-392.401 -94.739)" d="M392.871,94.739a.47.47,0,1,0,.47.47A.47.47,0,0,0,392.871,94.739Z" data-name="Path 5" id="Path_5"></path>
                                                    </g>
                                                </g>
                                                <g transform="translate(5.837 5.837)" data-name="Group 66" id="Group_66">
                                                    <g data-name="Group 65" id="Group_65">
                                                        <path fill="#000" transform="translate(-145.804 -145.804)" d="M149.967,145.8a4.163,4.163,0,1,0,4.163,4.163A4.168,4.168,0,0,0,149.967,145.8Z" data-name="Path 6" id="Path_6"></path>
                                                    </g>
                                                </g>
                                                <g data-name="Group 68" id="Group_68">
                                                    <g data-name="Group 67" id="Group_67">
                                                        <path fill="#000" d="M14.517,0H5.483A5.489,5.489,0,0,0,0,5.483v9.035A5.489,5.489,0,0,0,5.483,20h9.035A5.489,5.489,0,0,0,20,14.517V5.483A5.489,5.489,0,0,0,14.517,0ZM10,15.486A5.486,5.486,0,1,1,15.486,10,5.492,5.492,0,0,1,10,15.486Zm5.814-9.633A1.667,1.667,0,1,1,17.48,4.186,1.669,1.669,0,0,1,15.814,5.853Z" data-name="Path 7" id="Path_7"></path>
                                                    </g>
                                                </g>
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://api.whatsapp.com/send?phone=923323188195" target="_blank">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
                                            </svg>
                                        </a>
                                    </li>






                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row Footer_row">
                        <p className="text-grey text-center pt-5">
                            @Copright2024 | <span>HH HERBAL'S</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
