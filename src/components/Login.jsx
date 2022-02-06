import React, { useEffect, useState, useRef } from "react";

const Login = () => {
    const userRef = useRef();
    const errReff = useRef();

    const [user, setUser] = useState();
    const [pwd, setPwd] = useState();
    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    return (
        <section>
            <p ref={errReff} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Login Cuy</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Login</button>
                <p>
                    Jika Belum Daftar?<br />
                    <span className="line">
                        {/* Router in here */}
                        <a href="#">Daftar</a>
                    </span>
                </p>
            </form>
        </section>
    )
}

export default Login;