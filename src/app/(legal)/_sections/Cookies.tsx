"use client";
import { app } from "@/constants";
import Link from "next/link";
import type React from "react";

export const Cookies = () => {
	return (
		<>
			<h1>
				Cookie Policy for <strong>{app.name}</strong>
			</h1>
			<p>
				This is the Cookie Policy for {app.name}, accessible from{" "}
				<Link className={`legal underline `} href={app.url}>
					{app.url}
				</Link>
			</p>
			<h2>
				<strong>What Are Cookies</strong>
			</h2>
			<p>
				As is common practice with almost all professional websites this site
				uses cookies, which are tiny files that are downloaded to your computer,
				to improve your experience. This page describes what information they
				gather, how we use it and why we sometimes need to store these cookies.
				We will also share how you can prevent these cookies from being stored
				however this may downgrade or 'break' certain elements of the sites
				functionality.
			</p>

			<h2>
				<strong>How We Use Cookies</strong>
			</h2>

			<p>
				We use cookies for a variety of reasons detailed below. Unfortunately in
				most cases there are no industry standard options for disabling cookies
				without completely disabling the functionality and features they add to
				this site. It is recommended that you leave on all cookies if you are
				not sure whether you need them or not in case they are used to provide a
				service that you use.
			</p>

			<h2>
				<strong>Disabling Cookies</strong>
			</h2>

			<p>
				You can prevent the setting of cookies by adjusting the settings on your
				browser (see your browser Help for how to do this). Be aware that
				disabling cookies will affect the functionality of this and many other
				websites that you visit. Disabling cookies will usually result in also
				disabling certain functionality and features of the this site. Therefore
				it is recommended that you do not disable cookies. This Cookies Policy
				was created with the help of the{" "}
				<Link
					className={`underline `}
					href="https://www.cookiepolicygenerator.com/cookie-policy-generator/"
				>
					Cookies Policy Generator
				</Link>
				.
			</p>
			<h2>
				<strong>The Cookies We Set</strong>
			</h2>

			<ul>
				<li>
					<span>Account related cookies</span>
					<span>
						If you create an account with us then we will use cookies for the
						management of the signup process and general administration. These
						cookies will usually be deleted when you log out however in some
						cases they may remain afterwards to remember your site preferences
						when logged out.
					</span>
				</li>
			</ul>
			<h2>
				<strong>Third Party Cookies</strong>
			</h2>
			<p>
				In some special cases we also use cookies provided by trusted third
				parties. The following section details which third party cookies you
				might encounter through this site.
			</p>
			<ul>
				<li>
					<span>
						This site uses Google Analytics which is one of the most widespread
						and trusted analytics solution on the web for helping us to
						understand how you use the site and ways that we can improve your
						experience. These cookies may track things such as how long you
						spend on the site and the pages that you visit so we can continue to
						produce engaging content.
					</span>
					<span>
						For more information on Google Analytics cookies, see the official
						Google Analytics page.
					</span>
				</li>
			</ul>
			<h2>
				<strong>More Information</strong>
			</h2>
			<p>
				Hopefully that has clarified things for you and as was previously
				mentioned if there is something that you aren't sure whether you need or
				not it's usually safer to leave cookies enabled in case it does interact
				with one of the features you use on our site.
			</p>
			<p>
				For more general information on cookies, please read the{" "}
				<Link
					className={`underline `}
					href="https://www.cookiepolicygenerator.com/sample-cookies-policy/"
				>
					Cookies Policy article
				</Link>
				.
			</p>
			<p>
				However if you are still looking for more information then you can
				contact us through one of our preferred contact methods:
			</p>
			<ul>
				<li>Email: mikeodnis3242004@gmail.com</li>
			</ul>
		</>
	);
};
