(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7992:(e,t,s)=>{Promise.resolve().then(s.bind(s,4012))},4012:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var l=s(5155),a=s(2115);function n(e){let{itemData:t}=e,s=t.map(e=>(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4",children:[(0,l.jsxs)("dt",{className:"font-medium text-gray-900",children:["Item ",e.id]}),(0,l.jsxs)("dd",{className:"text-gray-700 sm:col-span-2",children:["Price: ",e.price]})]},e.id));return(0,l.jsx)("div",{className:"flow-root",children:(0,l.jsx)("dl",{className:"-my-3 divide-y divide-gray-100 text-sm",children:s})})}function i(e){let{submission:t,correctAnswer:s}=e;if(!t)return;let a="Wrong",n="mt-4 leading-relaxed text-red-500";return s&&(a="Correct",n="mt-4 leading-relaxed text-blue-500"),(0,l.jsx)("p",{className:n,children:a})}function r(){let[e,t]=(0,a.useState)(2),[s,r]=(0,a.useState)(10),[m,c]=(0,a.useState)(p()),[d,x]=(0,a.useState)(0),[o,u]=(0,a.useState)(!1),[g,h]=(0,a.useState)(!1);function p(){let t=[];for(let l=1;l<=e;l++)t.push({price:Math.floor(Math.random()*s),id:l});return t}return(0,l.jsxs)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:[(0,l.jsx)("header",{className:"bg-white",children:(0,l.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8",children:(0,l.jsx)("div",{className:"flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:"Calculate the bill - a math excercise machine"}),(0,l.jsx)("p",{className:"mt-1.5 text-sm text-gray-500",children:"Sum up the bill items prices and check your answer"})]})})})}),(0,l.jsxs)("section",{className:"bg-white",children:[(0,l.jsx)("div",{className:"lg:grid lg:min-h-screen lg:grid-cols-12",children:(0,l.jsx)("main",{className:"flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6",children:(0,l.jsxs)("div",{className:"max-w-xl lg:max-w-3xl",children:[(0,l.jsx)("h2",{className:"mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl",children:"Settings"}),(0,l.jsx)("p",{className:"mt-4 leading-relaxed text-gray-500",children:"Updated settings will generate a new bill"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(p()),h(!1)},action:"#",className:"mt-8 grid grid-cols-6 gap-6",children:[(0,l.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"settings-bill-item-count",className:"block text-sm font-medium text-gray-700",children:"Bill item count"}),(0,l.jsx)("input",{value:e,onChange:function(e){t(e.target.value)},type:"number",id:"settings-bill-item-count",name:"settings-bill-item-count",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"})]}),(0,l.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"settings-max-random-int",className:"block text-sm font-medium text-gray-700",children:"Max price"}),(0,l.jsx)("input",{value:s,onChange:function(e){r(e.target.value)},type:"number",id:"settings-max-random-int",name:"settings-max-random-int",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"})]}),(0,l.jsx)("div",{className:"col-span-6 sm:flex sm:items-center sm:gap-4",children:(0,l.jsx)("button",{className:"inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500",children:"Apply"})})]})]})})}),(0,l.jsx)("div",{className:"lg:grid lg:min-h-screen lg:grid-cols-12",children:(0,l.jsx)("main",{className:"flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6",children:(0,l.jsxs)("div",{className:"max-w-xl lg:max-w-3xl",children:[(0,l.jsx)("h2",{className:"mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl",children:"The bill"}),(0,l.jsx)("div",{className:"mt-4 leading-relaxed text-gray-500",children:(0,l.jsx)(n,{itemData:m})}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();let t=0;for(let e in m)t+=m[e].price;t===d?u(!0):u(!1),h(!0)},action:"#",className:"mt-8 grid grid-cols-6 gap-6",children:[(0,l.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"user-input",className:"block text-sm font-medium text-gray-700",children:"Enter your answer"}),(0,l.jsx)("input",{value:d,onChange:function(e){x(parseInt(e.target.value))},type:"number",id:"user-input",name:"user-input",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"})]}),(0,l.jsx)("div",{className:"col-span-6 sm:flex sm:items-center sm:gap-4",children:(0,l.jsx)("button",{className:"inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500",children:"Check"})})]}),(0,l.jsx)(i,{submission:g,correctAnswer:o})]})})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(7992)),_N_E=e.O()}]);