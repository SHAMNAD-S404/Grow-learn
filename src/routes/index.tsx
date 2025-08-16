import type React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { Dashboard } from "../components/Dashboard";
import { Profile } from "../components/Profile";
import { Wallet } from "../components/Wallet";
import { Order } from "../components/Order";
import { Page404 } from "../components/404Page";
import { Navbar } from "../components/Navbar";
import { ParentUseRef } from "../components/Ref/ParentUserRef";
import { HomeLazy } from "../components/lazy loading/LazyHome";
import { UserReducerCounter } from "../components/useReducer/UseReducerCounter";
import { HookCounter } from "../components/HookCounter";
import { ParentUseCallback } from "../components/useCallback/ParentUseCallback";
import { UseMemoExample } from "../components/useMemo/UseMemoExmple";
import { Timer } from "../components/Timer";
const LazyAbout = lazy(() => import("../components/lazy loading/lazy routing/AboutLazy"));
const LazyContact = lazy(() => import("../components/lazy loading/lazy routing/ContactLazy"));

export const Index: React.FC = () => {
  return (
    <Suspense fallback={<div>Page is loading..........</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* outlet routes */}
        <Route path="/dashboard" element={<Dashboard Nav={Navbar} />}>
          <Route path="profile" element={<Profile />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="/ref" element={<ParentUseRef />} />

        {/* lazy loading routes */}
        <Route path="/lazy1" element={<HomeLazy />} />
        <Route path="/lazy/about" element={<LazyAbout />} />
        <Route path="/lazy/contact" element={<LazyContact />} />

        {/* useReducer Routes */}
        <Route path="/use-reducer" element={<UserReducerCounter/>} />

        {/* custom hook route */}
        <Route path="/customhook" element={<HookCounter/>} />

        {/* rout for useCallback */}
        <Route path="/useCallback" element={<ParentUseCallback/>} />
        <Route path="/useMemo" element={<UseMemoExample/>} />

        <Route path="/timer" element={<Timer/>} />

        {/* route for fallback url */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
