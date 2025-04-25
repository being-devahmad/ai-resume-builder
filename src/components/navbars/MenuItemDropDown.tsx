// import { BriefcaseBusiness, Info, LeafIcon, UsersIcon } from "lucide-react";
// import { useEffect, useRef } from "react";

// const MenuItemDropDown = () => {
//   const sectionRefs = useRef([]);
//   const headerRef = useRef(null);
//   const popoverRef = useRef(null);
//   const contentRef = useRef(null);
//   const arrowRef = useRef(null);
//   const backgroundRef = useRef(null);
//   const navLinkRefs = useRef([]);

//   const sections = ["tools"];

//   const dimensions = {
//     tools: { width: 490, height: 280, x: 0 },
//     developers: { width: 390, height: 266, x: 100 },
//     company: { width: 260, height: 296, x: 200 },
//   };

//   useEffect(() => {
//     const popoverLeft = popoverRef.current.getBoundingClientRect().x;

//     navLinkRefs.current.forEach((navLink, index) => {
//       const section = navLink.getAttribute("data-nav");
//       const rect = navLink.getBoundingClientRect();
//       dimensions[section].arrowX = rect.left + rect.width / 2 - popoverLeft;
//     });

//     arrowRef.current.style.transform = `
//       translateX(${dimensions.tools.arrowX}px)
//       rotate(45deg)`;

//     const showSection = (section) => {
//       popoverRef.current.classList.add("open");
//       sectionRefs.current.forEach((el) => el.classList.remove("active"));
//       sectionRefs.current[sections.indexOf(section)].classList.add("active");

//       arrowRef.current.style.transform = `
//         translateX(${dimensions[section].arrowX}px)
//         rotate(45deg)`;

//       backgroundRef.current.style.transform = `
//         translateX(${dimensions[section].x}px)
//         scaleX(${dimensions[section].width / dimensions["tools"].width})
//         scaleY(${dimensions[section].height / dimensions["tools"].height})`;

//       contentRef.current.style.width = `${dimensions[section].width}px`;
//       contentRef.current.style.height = `${dimensions[section].height}px`;
//       contentRef.current.style.transform = `translateX(${dimensions[section].x}px)`;
//     };

//     navLinkRefs.current.forEach((navLink) => {
//       navLink.addEventListener("mouseenter", (event) => {
//         const targetPopover = event.target.getAttribute("data-nav");
//         showSection(targetPopover);
//       });
//     });

//     headerRef.current.addEventListener("mouseleave", () => {
//       popoverRef.current.classList.remove("open");
//     });
//   }, []);

//   return (
//     <div ref={headerRef}>
//       <nav className="nav">
//         {sections.map((section, index) => (
//           <button
//             key={section}
//             className="nav-link"
//             data-nav={section}
//             ref={(el) => (navLinkRefs.current[index] = el)}
//           >
//             {section.charAt(0).toUpperCase() + section.slice(1)}
//           </button>
//         ))}
//       </nav>

//       <div className="popover" ref={popoverRef}>
//         <div className="content" ref={contentRef}>
//           <section
//             className="section section-tools"
//             ref={(el) => (sectionRefs.current[0] = el)}
//           >
//             <ul className="navlist-primary">
//               <li className="navlist-primary-payments">
//                 <div className="circle"></div>
//                 <div className="navlist-primary-text">
//                   <h3>Payments</h3>
//                   <p>A complete payments platform engineered for growth</p>
//                 </div>
//               </li>
//               <li className="navlist-primary-billing">
//                 <div className="circle"></div>
//                 <div className="navlist-primary-text">
//                   <h3>Billing</h3>
//                   <p>Build and scale your recurring business model.</p>
//                 </div>
//               </li>
//               <li className="navlist-primary-connect">
//                 <div className="circle"></div>
//                 <div className="navlist-primary-text">
//                   <h3>Connect</h3>
//                   <p>Everything platforms need to get sellers paid.</p>
//                 </div>
//               </li>
//             </ul>
//           </section>

//           <section
//             className="section section-developers"
//             ref={(el) => (sectionRefs.current[1] = el)}
//           >
//             <ul className="navlist">
//               <li>Documentation</li>
//             </ul>
//             <p className="subtle">
//               Start integrating Stripe's tools and tools.
//             </p>
//             <div className="two-col">
//               <div>
//                 <h4>Get started</h4>
//                 <ul className="navlist-subtle">
//                   <li>Elements</li>
//                   <li>Checkout</li>
//                   <li>Mobile apps</li>
//                   <li>Libraries</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4>Popular topics</h4>
//                 <ul className="navlist-subtle">
//                   <li>Apple Pay</li>
//                   <li>Testing</li>
//                   <li>Launch checklist</li>
//                   <li>Plug-ins</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           <section
//             className="section section-company"
//             ref={(el) => (sectionRefs.current[2] = el)}
//           >
//             <ul className="navlist">
//               <li>
//                 <Info /> About Stripe
//               </li>
//               <li>
//                 <UsersIcon /> Customers
//               </li>
//               <li>
//                 <UsersIcon /> Partner program
//               </li>
//               <li>
//                 <BriefcaseBusiness /> Jobs
//               </li>
//               <li>
//                 <LeafIcon /> Environment
//               </li>
//             </ul>
//           </section>
//         </div>
//         <div className="background" ref={backgroundRef}></div>
//         <div className="arrow" ref={arrowRef}></div>
//       </div>
//     </div>
//   );
// };

// export default MenuItemDropDown;
