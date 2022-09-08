
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Dashboard } from "../pages/Dashboard"
import { Repository } from "../pages/Repository"






export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/repository" element={<Repository />} />
            </Routes>
        </BrowserRouter>
    )
}