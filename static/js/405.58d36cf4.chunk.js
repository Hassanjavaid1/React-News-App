"use strict";(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[405],{405:(A,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(791),s(821);var i=s(290),n=s(425),r=s(129),a=s(578),B=s(978),Q=s(16),c=s(880),t=s(184);const E=function(){const{loginWithRedirect:A}=(0,c.D3)(),{user:e,isAuthenticated:s,isLoading:i}=(0,c.D3)(),{logout:n}=(0,c.D3)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"signup",children:[(0,t.jsx)("div",{className:"Top_sub_headline",children:(0,t.jsx)("h1",{children:"NEWSLETTER"})}),(0,t.jsx)("div",{className:"signup_input",children:(0,t.jsx)("form",{action:"",className:"signup_form",children:s?(0,t.jsx)("button",{className:"sub_login",onClick:()=>n({logoutParams:{returnTo:window.location.origin}}),children:"Log Out"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{id:"regular_news",children:"Login for better user experience!"}),(0,t.jsx)("button",{class:"sub_login",onClick:()=>A(),children:"login"})]})})})]})})};s(446),s(862);const l=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"skeleton",children:(0,t.jsxs)("div",{className:"sub_skeleton",children:[(0,t.jsx)(i.Z,{circle:!0,width:"40px",height:"40px",className:"wide_circle_skeleton"}),(0,t.jsxs)("div",{className:"wide_main_skeleton",children:[(0,t.jsxs)("div",{className:"wide_CT_skeleton",children:[(0,t.jsx)(i.Z,{className:"wide_category_skeleton",count:1}),(0,t.jsx)(i.Z,{className:"wide_category_skeleton",count:1})]}),(0,t.jsx)(i.Z,{color:"#f7f7f7",count:2,className:"wide_skeleton"})]})]})})})};const g=function(A){let{techData:e,isLoading:s}=A;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"tech_container",children:[(0,t.jsx)("div",{className:"Top_sub_headline",children:(0,t.jsx)("h1",{children:"Tech News"})}),(0,t.jsx)("div",{className:"tech",children:e.slice(0,30).map((A=>{let{urlToImage:e,title:i,publishedAt:n,description:r,url:a,source:B}=A;return(0,t.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("div",{className:"tech_box",children:s?(0,t.jsx)(l,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:null==e||void 0==e?Q:e,className:"tech_image",alt:""}),(0,t.jsxs)("div",{className:"sub_tech_news",children:[(0,t.jsxs)("div",{className:"tech_time_category",children:[(0,t.jsx)("div",{className:"tech_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2",children:B.name}),(0,t.jsx)("div",{className:"tech_time",children:new Date(n).toDateString()})]}),(0,t.jsx)("div",{className:"tech_title",children:i.slice(0,45)})]})]})})})}))})]})})};const d=function(A){let{businessData:e,isLoading:s}=A;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"sub_main_wide_business",children:e.slice(24,99).map((A=>{let{urlToImage:e,title:i,publishedAt:n,description:r,url:a,source:B}=A;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"sub_wide_business",children:(0,t.jsx)("div",{className:"sub_wide_position",children:s?(0,t.jsx)(l,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:e,className:"sub_wide_business_image",alt:""}),(0,t.jsx)("div",{className:"wide_sub_business_news",children:(0,t.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)("div",{className:"business_time_category",children:[(0,t.jsx)("div",{className:"sub_wide_business_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2",children:B.name.slice(0,18)}),(0,t.jsx)("div",{className:"sub_wide_business_time",children:new Date(n).toDateString()})]}),(0,t.jsx)("div",{className:"sub_business_title",children:i.slice(0,53)+"..."})]})})]})})})})}))})})};const o=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"general_skeleton",children:(0,t.jsxs)("div",{className:"sub_general_skeleton",children:[(0,t.jsx)(i.Z,{circle:!0,height:"6rem",className:"general_skeleton_img"}),(0,t.jsxs)("div",{className:"general_time_category_skeleton",children:[(0,t.jsx)(i.Z,{count:1,height:"2rem",className:"skeleton_time_category"}),(0,t.jsx)(i.Z,{count:1,height:"2rem",className:"skeleton_time_category"})]}),(0,t.jsx)("div",{className:"general_title_skeleton",children:(0,t.jsx)(i.Z,{count:1,height:"3rem",className:"skeleton_title"})}),(0,t.jsx)("div",{className:"general_descripiton_skeleton",children:(0,t.jsx)(i.Z,{count:3,height:"2rem",className:"skeleton_descripition"})})]})})})};const m=function(A){let{businessData:e,techData:s,isLoading:c}=A;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"business",children:(0,t.jsxs)("div",{className:"business_news",children:[(0,t.jsx)("div",{className:"Top_sub_headline",children:(0,t.jsx)("h1",{children:"general news"})}),(0,t.jsxs)("div",{className:"business_news_box",children:[(0,t.jsx)("div",{className:"business_news_position",children:e.slice(6,20).map((A=>{let{urlToImage:e,title:s,publishedAt:n,description:r,url:a,source:B}=A;return(0,t.jsx)(t.Fragment,{children:c?(0,t.jsx)(o,{}):(0,t.jsx)("div",{className:"business_box",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:null==e||void 0==e?Q:e||(0,t.jsx)(i.Z,{}),className:"business_image",alt:""}),(0,t.jsxs)("div",{className:"sub_business_news",children:[(0,t.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)("div",{className:"business_time_category",children:[(0,t.jsx)("div",{className:"business_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2",children:B.name}),(0,t.jsx)("div",{className:"business_time",children:new Date(n).toDateString()})]}),(0,t.jsx)("div",{className:"business_title",children:s.slice(56)})]}),(0,t.jsx)("div",{className:"business_description",children:r.slice(0,280)})]})]})})})}))}),(0,t.jsx)("div",{className:"main_social_media",children:(0,t.jsxs)("div",{className:"social_media",children:[(0,t.jsx)("h1",{className:"follow_us",children:"Follow Me"}),(0,t.jsxs)("div",{className:"social_media_icons",children:[(0,t.jsxs)("a",{href:"https://web.facebook.com/profile.php?id=61551678367934",target:"_blank",rel:"noopener noreferrer",className:"facebook",children:[(0,t.jsx)(n.NqZ,{className:"facebook_icon"}),(0,t.jsx)("p",{className:"follow_text",children:"Connect on Facebook"})]}),(0,t.jsxs)("a",{href:"https://github.com/Hassanjavaid1",target:"_blank",rel:"noopener noreferrer",className:"github",children:[(0,t.jsx)(r.FMM,{className:"github_icon"}),(0,t.jsx)("p",{className:"follow_text",children:"Follow me on Github"})]}),(0,t.jsxs)("a",{href:"https://www.fiverr.com/hassanjavaid121?up_rollout=true",target:"_blank",rel:"noopener noreferrer",className:"fiverr",children:[(0,t.jsx)(a.m8s,{className:"fiverr_icon"}),(0,t.jsx)("p",{className:"follow_text",children:"Find me on Fiverr"})]}),(0,t.jsxs)("a",{href:"https://www.upwork.com/freelancers/~01c469c95425efc4ca",target:"_blank",rel:"noopener noreferrer",className:"upwork",children:[(0,t.jsx)(B.i7p,{className:"upwork_icon"}),(0,t.jsx)("p",{className:"follow_text",children:"Find me on Upwork"})]}),(0,t.jsxs)("a",{href:"https://www.freelancer.com/u/Hassanjavaid121",target:"_blank",rel:"noopener noreferrer",className:"freelancer",children:[(0,t.jsx)(B.v$z,{className:"freelancer_icon"}),(0,t.jsx)("p",{className:"follow_text",children:"Find me on Freelancer"})]})]}),(0,t.jsx)(g,{techData:s,isLoading:c}),(0,t.jsx)(E,{})]})}),(0,t.jsx)("div",{className:"main_wide_box",children:e.slice(22,24).map((A=>{let{urlToImage:e,title:s,publishedAt:i,description:n,url:r,source:a}=A;return(0,t.jsx)(t.Fragment,{children:c?(0,t.jsx)(o,{}):(0,t.jsxs)("div",{className:"wide_business_box",children:[(0,t.jsx)("img",{src:e,className:"wide_business_image",alt:""}),(0,t.jsxs)("div",{className:"wide_sub_business_news",children:[(0,t.jsxs)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)("div",{className:"business_time_category",children:[(0,t.jsx)("div",{className:"business_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2",children:"business"}),(0,t.jsx)("div",{className:"business_time",children:new Date(i).toDateString()})]}),(0,t.jsx)("div",{className:"business_title",children:s.slice(0,70)+"..."})]}),(0,t.jsx)("div",{className:"business_description",children:n.slice(0,180)+"..."})]})]})})}))})]}),(0,t.jsx)(d,{businessData:e,isLoading:c})]})})})}},446:()=>{},16:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAM2CAMAAACeyd5PAAAA5FBMVEXz8/Py8vPy8vLx8fHw8PDv8PHv7+/u7u7t7e3s7Ozr6+vq6urp6eno6Ojn5+fh5+zl5eXk5OTj4+Pi4uLh4eHa4ung4ODY4ejf39/X4ejY4Oje3t7d3d3c3Nzb29vZ2dnY2NjW1tbV1dXU1NTH1uLS0tLR0dHQ0NDOzs7Nzc3MzMzLy8vKysrJycnIyMjGxsbFxcXExMTDw8PCwsLBwcHAwMC/v7++vr69vb28vLy6urq5ubm4uLi3t7e2tra0tLSzs7OysrKxsbGwsLCvr6+urq6tra2srKyrq6uqqqqpqamoqKjMpdH7AAAe9klEQVR42u3d/b/i1IHA4ekdFV9QB7XR2i3b2G5WWjfd4m6bVVqpVToO////s5/qdC4vyTknJIEAz/Njh3tPuMi3J5yT8OS37//iY4C784v3f/vk9QeAu/T6k4/9EYD79LEAAgIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAlwzgp/4IwH369MnP/RGA+/TzJz/zRwDu08+ePPFHAO7TEwEEBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEBFEBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEBBAASTgtfc++Oi6ffDea15GBJC23sqX325vwbfLz97yciKApMv+9GJ7O178OfOSIoCkefbV9tZ8NfOyIoDEPf3di+3tefG7p15aBJCIt7/a3qav3vbiIoAEvbve3qq/vevlRQAJmP59e7u+U0AEkGZvrbe3bG1DDAJIk6d/3t62P1sJQQBpUGxvXeFFRgCp9c7zmw/g86mXGQGkznJ7+5ZeZgSQGu9u74GVYASQGl/cRQC/8EIjgBx5+ve7COB3FoIRQI58sL0PH3ipEUAOFXcSQDthEECOfHknAfzSS40AcugvdxLAv3ipEUAObe4kgBsvNQLIoRd3EsAXXmoEkEMNvfh++YfrtPy+4Rl5qRFA0gL49ZtX+4QmXwsgAkiHAL5454qf0TsvBBAB5PQAfnvVT+lbAUQAOT2Af7vqp/Q3AUQAEUABRAARQAFEABFAEEAEEAEEAUQAEUABRAARQAFEABFAAUQAEUABRAARQAFEABFAAUQAEUABRAARQAFEALmbAL7x3rMPnr0tgAggdxbAN/Mv//7T4374+vcfCiACyN0E8L0/7t9x+Zv8NQFEALmHAL7xxfEN57/JBBAB5PYD+Oyb2scvngogAsiNB/Cjpq9R/3JMp8ECiADSfwA/fN74veP/M6I5oAAigPQewHc322alACKA3G4AX/vLNmQugAggNxvAIti/7XcTAUQAudEAvvk8HMDt7wQQAeRGA/h5pH/bf4xlCiiACCD9BvDpt7EAbnMBRAC5yQB+EO3f9s8CiABykwEs4gF83n0v4Lt//H77vOp4aZ0AIoD0G8D/jQdw+6zrwWT/+OkX/YcAIoCMKIB/TQjgr7r279VCcyGACCDjCeD3CQH8TV/961ZAAUQA6TeAzxMC2O3MNdsbokMBBRAB5MoCmB2McHoBBRAB5LpOgbOjwp5cQAFEAOk3gAMvgmQ1M8xTCyiACCD9BnDYbTBZ7Rn2iQUUQASQfgM46EborOETxtMKKIAIIP0GcMhL4bLGFZaTCiiACCD9BnDAmyFkgRXmUwoogAgg/QZwuNthZcEdNicUUAARQHoO4FA3RM0iv7d9AQUQAaTnAD785yC3xM+iO6xbF1AAEUD6DuAgX4qUJVxh0raAAogA0ncAh/hazJT+tS6gACKA9B7A/r8YPa1/bQsogAgg/Qfw4aOmOeCXrw3Zv5YFFEAEkAEC+PDsm9rHLwad/7UtoAAigAwRwIc3/uvF0aO/Oe07PNr0r1UBBRABZJAAPjy898f9BK4/O+n0t2X/2hRQABFABgrgw8Nb+Zd//+lxP3z9+w9PHLdt/1oUUAARQAYL4I+nwu89++DZ26cP275/6QUUQASQQQPY0Sn9Sy6gACKAjDiAp/UvtYACiAAy3gCe2r/EAgogAshoA3h6/9IKKIAIIGMNYJf+JRVQABFARhrAbv1LKaAAIoCMM4Bd+5dQQAFEABllALv3L15AAUQAGWMA++hftIACiAAywgD2079YAQUQAWR8Aeyrf5ECCiACyOgC2F//wgUUQASQswTwk8UffvfLtNuh9tm/YAEFEAHkDAF86/9+fPjXKbeF6bd/oQIKIALI8AF866//uilqvIB99y9QQAFEABk8gK/6l1DA/vvXXEABRAAZOoA7/YsWcIj+NRZQABFABg7gXv8iBRymf9vtLwUQAeQCATzoX7CAQ/Vv+2sBRAA5fwCP+hco4GD9E0AEkAsEsKZ/jQUcrn8CiABy/gDW9q+hgAP2TwARQM4ewIb+1RZwyP4JIALIuQPY2L+aAg7aPwFEADlzAAP9OyrgsP0TQASQ8wYw2L+DAg7cPwFEADlrACP92yvg0P0TQASQcwYw2r+dAg7ePwFEADljABP696qAw/dPABFAzhfApP69LOAZ+ieACCBnC2Bi/34s4Dn6J4AIIOcK4Jt/TS7T+t/P0T8BRAA5VwB/tR0bAUQAEUABRAARQAFEABFAAUQAEUABRAARQBBABBABBAFEABFAAUQAEUABRAARQAFEABFAAUQAEUABRAARQAFEABFAAUQAEUABRAARQAFEABFAAUQAEUABRAARQAFEABFAAUQAucoAfvK3sZkLIALIeQJ4LQQQAUQABRABRAAFEAFEAEEAEUAEEAQQAUQABRABRAAFEAFEAAUQAUQABRABRAAFEAFEAAUQAUQABRABRAAFEAFEAAUQAUQABRABRAAFEAFEAAUQAUQABRABZMQBfP7GFT+jN54LIALI6QHc/uGKn9EftgKIANIhgNsq//V1yqutACKAdArg7fFSI4Ac2txJ/zZeagSQQ9/cSQC/8VIjgBz6050E8E9eagSQQ4s7CeDCS40AcuiTOwngL73UCCCHGrYN35qr3tqNADKU5V0EcOmFRgA59tFdBPAjLzQCSI2v7qB/X3uZEUDqfHgHAfzQy4wAUuu/b75//+1FRgCpN1nfeP/WEy8yAkiDZ7e9Feb5My8xAkijT3644f798IkXGAEk4N9udw74w6+8vAggQR/d6m2xNnYAIoDEvHOb2wG/esdLiwAS9fQ3tzcJ/MdvnnphEUBSvPn5bSVw8/mbXlQEkFSvzZff3Uj9vlvOX/OCIoC0M/3ks+LzL67Z58Vnn0y9kAgggAACCCAggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIICAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggIIACCAgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAPKj7Sv7/3v2+A/bMu1XbbZNv6zGzu/PWh/0JCsWVfXPn91UVVHMEp9hTIu/1maW+MAq/ktnRVGtXj66KvJp0+OKbSuF/7gFkD4CuJ2m/Ka8VUuqbZtG7PVisTp8r2+W+eS8AdyuJr0EcJIvN0fPppwLoAAyngAmTQHXbVoybd3Xl8Eo1g3v9+X8rAGM/E3SApiVDUeyKacCKICMJIApicpbtaTctj/FfniYlqF3/Do/ZwC3edcAZlXoYJYzARRAxhHAhESt27Rksnfet5kkzv5i7/lVdsYAbqadAjhdxg6nnAigADKGAMangHmrlhQnvFezdcK7fjk5WwC3qy4BLDbx49nMBVAAGUMAo1PAdauWHDx6nXCgi7S3/To7WwC3i5MDOFmmHVEpgALICAIYmwLmrVpy+Ojw52k/FqNKfuPnZwvgdn5iAKer1EPaXWwWQAHkUgEsW03pIi05ev/HdsJM6opRVVW1ir/zBwxg88eAwWc226Qf02oqgALIxQMYngLmrVqSHb9bZ+36t17M/zU1ms4X62Cr2wSuZQCbwx16xFH/1mX+8sQ9y8tNYA6Y/OohgPQbwLLNBDD8fny1mWWT9tsP+rcpD3M5W2yaozRkABunWYEATg8Sd7jteV6mF1AABZDzBDA0BcxbnU0+boKeP4YzNM/Z//xvUffQSb5p6sWgAWy6ji8QwP2a1+14PtghsxRAAeTiASxbTACD78fF4+JvkfKJ1d5nX6umk+WXuwTXkyEjUbNVZdIygIvwmvXLv/4m7dM8ARRAzhTA5ilg3mo94XETdPEweQxJ4+NnqSfis1XtTQqGDWDDx4CN/5xFdi3WnvXPBFAAuXQAy/QJYOj9mO+e9pbxnTCr5JXNSVmXioEDWH9MTQGcrFM/Vi1TtlwLoAAycADL2BQwr3noQ8L5crk3vVslnABHtwtmA0eidr/JrEUAi/SdRWXCExdAAWTgAE5j79j14ydaCe/H+X44VpHlhN2rhsten2FvAVxPkgPY6tms4pfKCKAAMnAAHyJTwMcJYJ4SwGp/ypdHglCkXXt79gAW4WXahgAWyTcUPNgvkwugAHKZAM7CjXqcAD4kBHB2+J7ehPO6Tt0sfeYAPiyDHwM2BLDds8mj8RdAAWToAO7sw5sGJ4ApASwPl30XwXsLZN0v7RoogLtns8drz/UBzFqezlexXgqgADJ4ALPQ23a9syMuHsDJUe6mwS11ZdubBp4tgHvr5M27r6v6Z5N2F+wsducZARRABg9gaAqY787Q4gEsjn/TMvRB1zrl3lOXCWBwRbc+gOu26zmryDKIAAogwwcwMAXcnQAmBHBzvHAwD7zJp50/ARwwgHuX6OUJAWz/bIrIlFEABZDhA9g8BdybAMYDmNfdSm/dvBMmb3XP1HMHcHeZ9uDOWLUBbP9sJpF1YAEUQM4QwMYp4N4EMB7AVV0BipQLZxe9P8Mefte88WqN2qe0aL+jcZV4wYkACiDDBbBpCrg/AYwGMKt9O0+az/Oq9ItAEp5h99uHHv61Fk03yK8N4AnPZhG+5lgABZBzBLBhCrjaX6ONBXBZf/ersnFmVMVuO3XhAO5dqDxPD2DysykEUAC5fADrp4CHM7pIAJsuqps17nXp4w0+aABnDR8D1nbrhGeThW+XI4ACyFkCWDsFrA7CFQlg2bQIuop/n8dIA7h3K7BqyABuBVAAuVgA66aARx/phQP4eO3E4YVdjcuj4w/g3k1bCgFEAG8zgPPjKeDhBDASwKJ5DWDT8E+t3uANn5YNHMC9O/xlAogA3mQAd7brTRsmgJEArps/zmpa7NwkfWfIRQO4d8fqV59hRgKYfFlfFt46KIACyJkCeHTjquro/RwMYB6ITdM1Eq3WTS8UwL1L4qpQAK0CCyBXG8DDKWDNskgwgMF7yizrF4irNoG6VADr7owVCWDynW3K8HfDCaAAcq4AHkwBg6sioZO5urfyvP70sGhz7UQ0gEP9tfY+Bpw1B7DVszn8Px1XggggFw3g/hSwbl9MKIBl+Pyv/p3e6urZiwVw785YP90gP3It8CZxvGn9NmsBFEDOH8C9KWDdGW0ggNNIyoraOMQCMJIAPhzdID92N5h52nhFZN1EAAWQswVwdwpYuzE6EMBim2x3J8yqxVnjBQO4d2esovF+gKu258DryD3xBVAAOV8Ad6aAkUvjDofZvYF8zO57fdHiHsqXDODhDfLrA9jm2ez/vd0RWgC5eADrvgK9jP7QwVs5budDwtk2vAw6lgDu3xlr0hDANs/m4M89FUAB5NIBrOnYNCmA6zYBLGvPGqOb5y4awL07Y5VN3wrX4tkkfSWoAAogZwzgccjKhB/aXyZNMK1N7noy5gDu3Rkrbwhgvm3xJU8z3wssgIwrgHloAtgcwKpdABf1ya1GHcC9G+Q3HXP6s3mY7BR1fcLxIID0HcDDxYwy5Yd2938k2Z0d5dvUL9O9cADrP+esmh8TWQlebaMTQAEUQM4awMPtLNOkHypbBrBhJ0ykGZcOYO3TrAJz4dCzmVTbhMmiAAogZw3g/hSwSps27vxAyLr2lG+2DX0D+ZgCuHvS2tSuxGcz3f1Vm6kACiCjCOD+FDBL+qHUa2Cn9b94b8RN0zUUk/LiAdyvW8PkLenZzDdpN2oQQAHkvAHcnQIevrujS8eR7wNf1v/m/SWUqm4DyXTRuO5wxgDWXO9SBZ7kj/9eM7ubVoHPWQVQALlgAHff5FlSAPPYbrbHiU/9h4uHp5ZVvn/qOMmXgeacM4AHdasN4OGzWR7MAucHS+YpZ/0CKICcKYCPU8CjN3f9D63Svw53XT/tmRxtP1wW2U+JnGZFFW7OWQN4dKQ16xdHHxVuyvzl/5VkeXl4zWCofwIogJw7gI9TwCwpgFmLm0AVDfuEZ22uJDnphqhpFYk/dBYP4P4KR+zC6MmDAAogIwrgv6aAx+/t2h8qW9wHeecDxiI8a0q/ufN5A3j4MWDtDpb0Z1NNHgRQABlTAB+Kn3atZEkBnLa6A0rZdPHDZJmYjPXs4aIBPFyyqQ994s7IRQ/HgwDSawAb1f3QotU98KbNVz/kKXfU2hSBZ3ieAAZ3Sr4yT3g2m6yP40EAuVgAd3KQ9FVoVXM6pvFpUzl5uHgA9+/80HgRR3wSuJj0czwIIJcKYJG8B+blPG8b2DSYVeHZX+S28WcK4N6dsQK3PAg/m3La4dVDABlFANfpe2AOf6DulHnWOG9axm8YcK4A7l6+HLzny7RsOBHeLKadXj0EkDEEcN7i/neHU8b67wGa5MujamzKfJLwDM8WwOkm+aZXNc9mXc67vnoIIGMIYJW8oPkqcAnXwM6Kono5y6qWRT5NfIZnC+BO96v4M959NlXs2QigAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAni3su0rWd2/r17986rdb5ucNNyex8em/kM/z7l+qCObqloUs1OOv904B/w3K4D0pnp8Z1V1/54//vss/tvKVw8uTxvuLAFscxDRHm3KuQAigNdpuvvWmtY8YLJ59c+L6G/beXB22nDnCGCrg0hJ0joXQATwGpW7b60y/IhN9Lc9ThfXpw53hgC2Ooi0KK1mAogAXp2dKds/C1f3ud3s8d/n6eeWxanDDR/AdgeRmqVcABHAa1Psv7dqs/W4DLJMP7ecnDzc4AFsdxDbDgUUQAFk1NYHH2aFz2tjH5gtYieWKcMNHsB2B5EepkwABVAAr0qeciK3c8pYpKYlO324oQPY8iDSw3R8Mi2AAsiYrQ7fXLW7QsrE2dI89ri04QYOYMuD2HncgaNfVAigAArgFcmO312z8MOCWwHLyEwxcbhhA9j2IEJDzYq90+lNPwH036UAchavirUJf3i3Tto0MomtrKYON2gA2x5EZKhid0l5LoAC6I9wNR4Xbefr4PJtkbQVMI8UJXm4IQPY+iBiQ812CrgQQAH0R7gai8eP7Irg2eskacVgFTmnTB5uyAC2PojoUHnzp4kCKICM1uPqbrF7+ho8bwxsBZxF7prQYrjhAtj+IOJDrRp/jwAKIKOV754ClsE5XpawFXARmSW2GG64ALY/iPhQRS+HKYACyFmtdz+yi8zf1vHTxU1kCaTNcIMFsP1BxIfKBBABvDrz/Y/sVsFNzEV0K+A8sgTSarihAnjCQbQJ4FoABdAf4UpU+9Of8BruJLprbhl5QKvhhgrgCQfRJoAWQQRQAK/E7PADsE3wY77YnU4nkdPJlsMNE8BTDiI+VG4bDAJ4bcrDpctF8Man88iSaRFZUGg53DABPOUg4kOVNkIjgFdmcvTWn4Yv5FiHC7cOL4G0Hm6IAJ50ENGhHnfWuBROAAXwShTHJ3/LYOKK4FbAWeQMufVwQwTwpIOIDlX2fTME/3EKIEPbHOcsfDOXaXArYBlZAmk93BABPOkgYkMVvd8Oy3+cAsjA8rrPrcK381uGtgJuwksgJwzXfwBPO4jwUNMq9IUBAiiAjNKqbuJTBG+RF5os5ZEzyROG6z+Apx1EYKisqMK31hdAAWSMstq37SR8wdu6+TS3Cq8lnDRc3wE88SBSb1NadIza6aMggLSzrL8TVHizX9H4r9PIEshJw/UdwBMPIi1M66zrrE4ABZAzaQrWLLgrZNq4FbAIL4GcNlzPATz1IJLyV7Q8fgEUQC6ncc12FXynNe4ZWYeXQE4crt8AnnoQCVVaTKNRE0ABZCwmjWu2eXBXyLxhwSALL4GcOlyvATz5IJK6tComAogAXofAZWubYMvW9QsGZfgk8uTh+gzgyQeR+p2YFkEQwOuwbr6sdxHcFbKoX0jdhJcRTh6uzwCefBDJ31ZZTQRQAAVw/PLA22kavO3VtPZsMQ8vgZw+XI8BPP0g0r+vdz0TQAEUwNGrQjvflsFdIVXddROr8BJIh+H6C+DpB9H8xejV+rCAEwEUQH+EkcuCdzV4XOio+7LIujuITsOf43UZrrcAdjiI4FCzvWtB3BBVAAVw9Mrw1a/hb/+o+eKPRXgJpMtwvQWww0HEhtq9GvjwcmABFEBGZhrZehL+EvSar35bB5dAOg3XVwC7HESrb4VbC6AAMmpF+qf6eSgl1dH546z34foKYJeDSBhq59dnAiiAjNjjnpWE7b01P3+0mrAMLoF0G66nAHY6iJShqoY76wugADIu+baFLPTzP31cNgkvgXQbrqcAdjqIlKHyhn4KoAAyLus2Maj7VG+z/3lXEV4C6TZcTwHsdBApQ00aHiSAAsioZNtWajbNLfbnSqvgEkjH4foJYLeDSBqq4acFUAAZlapdDGq+LHL/tlKz8BJIx+H6CWC3g2gZwEwABZCxmrZrQe157Wr3HxfBJZCuw/USwI4HkTLUVAARwCtQtoxB3crG3vd/bIJLIF2H6yWAHQ+i3SLI/kRYAAWQEZkELmytv8i1ZuPw46aS6vGdvxlkuD4C2PUgUoZaWwRBAMeviH0JR+SU7nBKNV0GPizsYbg+Atj1INpthLYNRgAZrXXk68tfWYZukfe48FGGv1Gt83B9BLDrQbS6FM5GaAH0RxitfBu+cdWjeXAnzOr4ZqDDDNdDADsfRGyoWdW8jVoABZDxWEW+vrx23lSGohL8fd2H6yGAnQ8iOFRW7P+fgZshCKA/wlhlwfu8NJ3W1eyEObq2djPQcAkBjFzS1v0gAmsom9h1dG2uvGuxTO0/ZQGkvbLFfYV3GleEflNgCaSH4boHsPtBtNlAs3wQQAFknKbb8JJFU75qdsLM4lfM9TJc5wD2cBAtwrSaCKAA+iOM1CJxP8hRv/LQJ2uNSyB9DNc5gD0cRIf+CaAAMhY7J3hZyuOrUN+K6BJIL8N1DWAfB9HP12IKoAByUUXyfpCf5KEvi5xEl0B6Ga5rAPs4iH6+GF0ABZCLWqfvBzn8gTL0cVnDEkgvw3UNYB8HkZi/2rshCqAAMg7zbfjOpcHT3OOfyCJLIP0M1zGAvRxEQv3KecOvE0ABZByq8ISt7lO84Ndxr8NLIP0M1zGAvRxEaIx1VRV54Ao7ARRAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEBAAP0RAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEBAAP0RAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBGgO4M/8EYD79LMnP/dHAO7Tz5986o8A3KdPn3zsjwDcp48FEBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEuGQAX/dHAO7T609++/4vPga4O794/7f/Dw9R8cpllTjCAAAAAElFTkSuQmCC"},290:(A,e,s)=>{s.d(e,{Z:()=>B});var i=s(791);const n=i.createContext({}),r=!0;function a(A){let{baseColor:e,highlightColor:s,width:i,height:n,borderRadius:a,circle:B,direction:Q,duration:c,enableAnimation:t=r}=A;const E={};return"rtl"===Q&&(E["--animation-direction"]="reverse"),"number"===typeof c&&(E["--animation-duration"]="".concat(c,"s")),t||(E["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(E.width=i),"string"!==typeof n&&"number"!==typeof n||(E.height=n),"string"!==typeof a&&"number"!==typeof a||(E.borderRadius=a),B&&(E.borderRadius="50%"),"undefined"!==typeof e&&(E["--base-color"]=e),"undefined"!==typeof s&&(E["--highlight-color"]=s),E}function B(A){let{count:e=1,wrapper:s,className:B,containerClassName:Q,containerTestId:c,circle:t=!1,style:E,...l}=A;var g,d,o;const m=i.useContext(n),u={...l};for(const[i,n]of Object.entries(l))"undefined"===typeof n&&delete u[i];const h={...m,...u,circle:t},w={...E,...a(h)};let C="react-loading-skeleton";B&&(C+=" ".concat(B));const I=null!==(g=h.inline)&&void 0!==g&&g,b=[],v=Math.ceil(e);for(let n=0;n<v;n++){let A=w;if(v>e&&n===v-1){const s=null!==(d=A.width)&&void 0!==d?d:"100%",i=e%1,n="number"===typeof s?s*i:"calc(".concat(s," * ").concat(i,")");A={...A,width:n}}const s=i.createElement("span",{className:C,style:A,key:n},"\u200c");I?b.push(s):b.push(i.createElement(i.Fragment,{key:n},s,i.createElement("br",null)))}return i.createElement("span",{className:Q,"data-testid":c,"aria-live":"polite","aria-busy":null!==(o=h.enableAnimation)&&void 0!==o?o:r},s?b.map(((A,e)=>i.createElement(s,{key:e},A))):b)}}}]);
//# sourceMappingURL=405.58d36cf4.chunk.js.map