import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Expr from './pages/Expr';
import If1 from "./pages/If1";
import If2 from "./pages/If2";
import If3 from "./pages/If3";
import If4 from "./pages/If4";
import Loop1 from "./pages/Loop1";
import Loop2 from "./pages/Loop2";
import Loop3 from "./pages/Loop3";
const App = () => {
    return (
        <div>
            <h1>03-jsx</h1>

            <nav>
                <Link to="/expr">[Expr]</Link>
                <Link to="/if2">[If1]</Link>
                <Link to="/if3">[If2]</Link>
                <Link to="/if4">[If3]</Link>
                <Link to="/if5">[If4]</Link>
                <Link to="/loop1">[Loop1]</Link>
                <Link to="/loop2">[Loop2]</Link>
                <Link to="/loop3">[Loop3]</Link>
            </nav>
            <hr/>

            <Routes>
                <Route path="/expr" element={<Expr/>} />
                <Route path="/if2" element={<If1/>}/>
                <Route path="/if3" element={<If2/>}/>
                <Route path="/if4" element={<If3/>}/>
                <Route path="/if5" element={<If4/>}/>
                <Route path="/loop1" element={<Loop1/>}/>
                <Route path="/loop2" element={<Loop2/>}/>
                <Route path="/loop3" element={<Loop3/>}/>
            </Routes>
        </div>
    );
};

export default App;
