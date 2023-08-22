'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    useEffect(() => { import('bootstrap/dist/js/bootstrap' as string); }, []);

    return (
      <nav className="navbar navbar-dark navbar-expand-md bg-body-tertiary sticky-top bg-custom">
        <div className="container-fluid m-3">
          <Link className="navbar-brand d-block-inline fw-bold" href="/">
            <span>&#x1F680;</span>
            <Image className="logo" src="/next.svg" alt="Next.js Logo" width={90} height={16}></Image>
              <span className="badge bg-light text-black ml-1">v13.4</span>
          </Link>
          <button
            className="navbar-toggler collapsed d-flex flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="custom-toggler-icon top-bar d-md-none"></span>
            <span className="custom-toggler-icon mid-bar d-md-none"></span>
            <span className="custom-toggler-icon low-bar d-md-none"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-uppercase">
              <li className="nav-item mt-3 mt-md-0">
                <Link className="nav-link" aria-current="page" href="/api/auth/signin/credentials">
                  sign-in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/blogs">
                  blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}