import React from "react";

export default function Example() {
  return (
    <>
      <div className="container-fluid" id="Sectionfour">
        <h1 className="heaDmain">Example</h1>
        <hr className="hrE" />
       <div id="cardMain">
        <div className="cardOne">
          <img src="data:image/png;base64,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" className="cardImg"/>
        <p className="cardPara">
        Buy NFT to help <br/>
        the environment<br/>
        and get passive 
          <br/>
            income
        </p>
        </div>
        <div className="cardTwo">
            <img src="data:image/png;base64,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" className="cardImg"/>
        <p className="cardPara">
        Advantage Resale<br/>
         the ownership<br/>
              Borrow <br/>
       Generate profit
        </p>
        </div>
      </div>
      </div>
      <h1 className="heaDmain">Profit Distribution</h1>
      <hr className="hrE" />
      <div className="SectionFive">
      <div className="cardThree">
      <img src="data:image/png;base64,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" className="cardImgone"/>
      <h2>Owner</h2>
      <h3>70%</h3>
      </div>
      <div className="cardFour">
      <img src="data:image/png;base64,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" className="cardImgone"/>
       <h2>Company</h2>
        <h3>25%</h3>
      </div>
      <div className="cardThree">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmIAAAJiBAMAAACWeLPVAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIVBMVEVHcEwKqk4NrFDo3AzzrBjr6ufFxcWoqajqdhFgwIfn4YBYcqalAAAAAnRSTlMAf7YpoZUAABp1SURBVHja7J2/bttIF8VDPYHMJxANxIZqUkCgllOotkAZYinAWaQ14A9IbRWpBXgD14QaP+XnDZREJIfkzNxz5w+t22wjEfFvzzlzZkRRnz55OtPpp8sMTnR1FcfX9UmSq6urC5r2vLO67pvk6qK5c2ldq81FbL/EFV/rTHJ1waU9HxdaZILrBO0jhtrVNW2uLrwuzFjs2GA2vfC6BBqPHz+SN9G8xs4MasiPYE0eXr+YXQypPdOLIT+6NaNr/pl+1ASbz1/P5mOmmarAXl//97Voz9evr6+HDyUzlch//SljVeOmpLerD+HI+esQrb/UDuN35tAaOf/5UOjM5vth3GvmQIS96uE6QXsdcZj1Rtj838J0vh1GGmZ9jlQOr65IG2OYxWA7qpszGRswAK8BZiEi614k5xhev5gdxpP/nYvk/KlAzv1hJMg6gf1boOfbKJBFvAHWmNfwkUVWDPl3/jkEjqwD2M+Cb74HjawD2FPBOd8CRhZxV4qOOYSKLLK0RKrKzHtk0uI6fypsjLybhbg14ndk3xYgCQ/Yz8LefA8NWewowvrDLAkL2FNhd+5DQhY5jLD+MJtegI0CmQxY4WYCQRZ7A0yGLAkB2G3hbh79RzbxClhR7Fr/npnvIXZTuJ1Hv6Ms8kxhcpVNfQ4x98AkKks8BjYvigsyHU/6AUxSMqYXYGEii33YGilumLzwZauJ+QPsHZmHrSxyfbyjefjj3pfNf9FL4ddsfTv3j52euJqcyiZ+efK28G92XvnS217R1zE88uT8wUtizY6R+OPJl8LP2Xrjy0CAtZF54smbwt959MKXUQip35H+Ux88+eA1sY0HvpyEEmLSKJs59+RN4fvsXPsyDijEZFGWOPbkUwDEtm5F5vv+WzZ3LsM/PE+2fTlzGPsPgRDbuPNlHFSx6IqyxJXE5kU4c3AksjA9KfGlm2bxUoQ0WyfhH6wn2750EfsPgRHb2A//KLD9ZP/+cmpbYvMivDlYFlkUcOzLwn9qV2I3RYizsyqyiD/2395n+d+8//fIH/5TmxL7jP5byrcqbQ0e29aiyCLG2JfROs3yjTH8p/Yk9gJVV9o/UKXZE1nEdFdKWaXDswQye7Qlspgl9pV4YZltLIks4mgWyrygzHZ2RFaTGCrvU71BrQFWRBbhY79M9eeID/+pBYlhmkWVmswbvGEkgUisNAMGSjMLIkNLrEzN5xiCyNASe0sp8xaAyMASq1LaLL0XWYS9zYIKDIHsnldkMXR/RAeGQPbIKjKoxFLILKEi4/yM8tYHhf0apMhmHksshQ1VZRs+kSElVqX+IOMTWYyTGBIYGdk9V/ZHuC6GBUZG9shUMHASQwNL0wWs+Cc+Skx5L5m/j5U95oFFZBPUjlIBmBA/zma/F8zItizZD5PYwJ+e1Wj9GZFz1rIDQ8GASaw/xOS4TtD40p9DZDFIYuu+v3r1o3/2bOl/gGd/BLpvoCTwGmJGibI7ePbHoA+QVPy4EvVR9iboY6UEnfufOUIsOwlsL6SzP5dZzhFlO3D2TzAfg5cDAhM9s1KQGcGXG3D2Yz4GL3sTbC8GRiHNMCJLsLn/BPdkNqivts5yuC/vodmPqRZlDzChOEPIjp4UDEx7lf+NX1QMKZHZHu3LLTD7J5BqUXVGmNCafmRLSMGY4Uz5GezJlZbA6jLbg315B7NlBKkWFQrYX5ntsSLbwLJ/gqgW6w5gwmj6kC0QBWPmPvehwPqROc/+CFEt1vJVUhjPKcyeoSI7YGyJyP0SDawX2dFx9iNyv5IWVyEAyHJg+G8gtkTkvkxiVGB/kCFFBsn+GJD7lSz1BXk6038JyP4EYMo5UGIIYD3IjoDsd2nKShJiQuCQ5TiRAWwZ03O/lADbC15kR3r2J+7KWFtiKxSwU/rvcSIjV7IJPffbEvsCA/Yb2TNMZFuqLQGmrLhCrNeXS0e2jOi535bYSgg4sj1MZDuaLQGmXHN6sseXCze2jOmHry1PgoH9RpajjjBItgSYcs3syW5fLlzYEmBKfon9RoYSGcmWMbmMtXKfA9jJlyiRHQi2pJuyWS2+CJaRhv+SbkuCKZ98lliXyAwLxr25LemmXNuR2AnZs3Nb0o+rW/e4so00/OmH18bd4gEjMUZiSJHdm/YLuikra8DkIltatiXZlGVqkdhKVmOPVm0ZkVfKdeuLDbZFZteWE7IpbUrshOwZk/0Ho34RU+traVViJ5FhbLkzCbKIvKes7EpMKjLD7N+a2HJCPuixLDG5yMhHPjNnpuSXmFRkFm2JNqUQTkRGt6VBjIViyhOyHGzLqXaM3ULKmLBGbA+pZI/aQRYHaMpT8c+xtky0Y+wBYcpM2BPZM8KWG90gIxf+0oXETiKDrJa6tX9C3YVXTiQmE5mhLe80iZF34VqmzIUe0qxfZHuELTX7BblbqJsy0xLi3wdgZMrZf7TRLybUwr9WlJje+pArvHrVsqVhv9hp2RLcLRSBDTFTenU7+630C2q3UDNlLn1AiDKvjlejbKnVLyJqt1AyZd71CBplYNJXt21J7hdT291CC0HHy9VfDbOlTr8gx5gCgjzVQJb3Pedn2Jb8QYbtFpkmMAmy/kcjcdlSPcjAMabnMtlbhp4mJREZol+oB5mFGBt+Apnpi2W2ZA+yGLpFynQ92XyT1ovltqR+bJlYjTETidXeNfzibMiWzEEWYY9fjYCdvS01I5ZDD2KnisQQMZYZePL8fVov7rIlOcimisHPFGNqD+DU0GNLyK0jH2qQzRSDnyfGFJ9Ymum/mC/IErXgR8SYscROrFMjYit4kLmMMVVgv96q9eK6yOwF2QR6NmYusV/vTc2J/YCekc0YY6wYiDGNx1VrvbZlS+hH44lKjCE+dyOYUnOy/n5BPiNjjLG1D8RaQbbgCzLuGEu5xlmQTaC3D1iTmMyW0JsJZsPBj7hfOHNK7Bl5D3EyHPw3LMGfpvZsiYj+3WD0R9QY6w/+nJFY1ru1XFCDbMq1Da8cxdhQkBlG//BmnNxffSKWA76jNNhhmYM/TZ0FGVf0Q7+95ZrYHvqtLhvBb9WUQ0HGFP0T6JdQx0BsqMNOeIM/Te3aEhr9s/7gvw0v+Jmi/7E/+qHfpXdMbNWI/oIj+snBXzo6uFAhduSI/oga/KXD4B+K/iM1+qccwb/2iFgz+hcc0U8O/srRUY/KOeySI/rJwT9GYr3RD33cmPWlkmmx3PYQIwd/4XSpZCLWF/3k4C+9IiYwi2Vf9E+gj7TzglgOIHboJhYjnzOZeUfMtF7suhdL8lLpGbFVfbFc4BdL8lJZeU1sCV8s6Uulf8T2AGLdiyV5qRwoF66J0R9DPEMvlb4Ra9aLAr1YxuTfRRopsbuuxZK8VJYeEkMUss7FEvpzD5kPxFYYYl2LJX2pXHtIDFHIuhbLiLxUjpVY0UGMvlSOlljHYkneVQ4VWPvEBKbCdu0s6eWi6l8qbZ/B4oh11AvsL+L5QuwHgljHYon9mcpREdtIidGXyqHK75yY+U/0ShfLiP5ru/4Ra1TYgrxYTqHlYpCYsL1U4onNZMRuEMSycRHbyYjRy0XppcaeARtLeb2IyeWiHNRYbjnGYMS2MmLUG/lHTUxaL+jlwkNiAkSskBAD1LH1IDFhOcaaxBbIQgaoY2MmJilkgHKhQCy3bMrGVnyBrBcTcrkYNbG7NrEYS0zniZuMpsQTS4B1TEVjwRKTFDL6WY+SxnK7pvyvkEGISQoZvVwoacw2MZTG2oUMUMcGDxRtPr1BrrFlgStkgDqm5Eo2kWWdz+vHaOzQSeyWWWOWicE09tgkBiiwasSEVVPiiLUqLKDAqrmSSWSZEjGCK1sVFlDHFDUmbEoMp7FWIbNILLcoMRvEHtiJiSCJbZrEAJVfMcc4iGVCcOdYq/QDCuzgjSp8yFSJETTWLP2IAqusMWEt95HEGhUWQkw1x+DIhOB3ZSexW5DGMm+I7UEaa5R+ROVXdyUYmbCisUbpR1R+DY3ZJAY67WmWfjgxYU9kwgkxROXX0ViAxBql3zoxYQeYBWIPF2Jq26Rr68SEFWDvxJ7RxK5hmySFO1VcEztS/jznxIQNYLB7ezqJzcdGDKixwzmxyAUxYQEYUmO1jSVkWzl2Yo9SYpRtpcLd6WhkQoEY5F7r2sbyQsyEGGRbqU8sZweGJFbbWDoiRkSWKRFLeYm9kK5ZeU5sSfrrtj4QIyFTAcZGLMYTy9iJqVwfd2jdOLyIyd8XMdSYCIjYvZTYA+maa22NEZAJNWKoo4vGcU+AxDJPiBXWiYlgiBXnxK4xxMpUP8gEJ7B3YjlqW1k/7nFJTPClWLPyMxCb0y5ZWCOWKRODVf76AZlTYuJCjJ+Y8rKCeY5im1iEIlaZ/FUGyIQRsSWK2BR0BGuPmPKl6+WCSuyRgdjajJiwQ2zBQOwGSCxlI6b+/2IFea615BAWRqw0JCZ4UgxbYP0ilrNITGCez99H7HPhpF7oiUyYEqP+cXfcxDIeYjqXhdaxc2ITGLHKlJjgkJiAlovzj0Z8IJYzSGzFRAypsbVxkAkGiWHLBY/GCMRyuMTeiaXcxF4KV/VCVWRaV8SWi/OP33AaM18s1USmd0nsUsmjMQoxgZZYfamkE9uyEKsItszBEltBfoeXmxgh+hVEJoTD4PeRWA6VWCDESkqQCajEBORneNmJkaJ/QGS6lwMHvw1i2rYUSImJWvD7S6wiEcuBEqvH2NJbYqTo7xWZEG6Dn4sYLfp7RKZ9rXqMHcdKTMAkFgwxYvR3ikwfPjr42YjRor9TZEK4Dn42YmuiLXOQxFZ7cPCzEaMGmcBIDB9jdoiZ2DKHSKwRYz4To0a/VGSCGGOI4OcjVlFtmSMktnpGBz8fMWr0S0QmqDG28JpYCbelCfa6KY9cxD4X8CBDiMzgCvVuAYkxpk9GIEHWSDKTSzDEGM8nvO0gS+nETK5Q7xYLz4nRg6yGzEilDDF2TizCEgMEWU5EXjclJsZ47lSRBBlVZEbEVzk+xjg1tkYSE3RTLuAag90HKw2yjITMTGJ7hhhjuXMYF2R/iAm6KUExxkoMEGSCgrtuymUAxNYwkQnASrlgJHZbcASZochyY9gNU4JiTPpNrnnBEWQEYsIjU9YepwUnhrDlOzLDN/KYkuUbqf9v72x22zaiKEz5CUQ/gTSALXBNOQW0dVZdOhADZ+lCFJSlikiIt3kDAlagtWsXyFPWTdx6/jnk3DucH91lAdPTD+ecOTN1SVhbvu/5c0imxCUGYsu+w5axcolJjIA9/RHClu8hTAkWYxhvbwC3ZT9TljimRCa2LAcTGZYpGWLn8MQehxIZl/sLeGKAbzpS94tyMImBdQuUd0N5YctvWKaUE3sI3pZc7gOa8hab2IdhRPYNy5QssTMEYstyCJFxEgM0Jcq7OrW2dCQyNFMqiF0A/oZPQ4jsGqu+4rxzWG/LuXuJQZqSJQZ+CSvL/tK9xCBNifLu9BZbzp1L7AmfWAH5K/jsL10DA5WY4hsQsMQ+OBYZ/8eNV3jEMhxiy9KtyErE3Oe+zIJx3SOz5dypxGBNifG9pPbsL51K7AmTGMblhWuRIUusUnwp78sSNftLhxKDzX32ZfM4lxfS7J87kxhw7vNfYzzDIvbBFbJrZImxB3Gsg6Us+0tHnoTOfZTv8BplP5LIBIktlrjEcA6WDkWGLjH2WJnB/z2URmSlC2DgEuO/wI50sJSLbI7vSXiJccdKtIOlI5E5kBh3rEQ7JslFVmIDQ5AYd0gC+tizscjmyJ5EkFjFE8M6JilENkcFhiEx7pCEeEySi6xE9SSCxPhDEjKxTyUistKJxERieKVfIbI5nicxJMZXforY5dKRyOZYwFAk9lb5/yOGWGEVIgNBJgOGIjGhwGITW5YoyKTv+Fm6IYZZYaX3ZCDIZA+9wvkX4OsYOrEl0PuLWhWGJLFKQ+wLzq/8VIKrTPrEJ5zlfxSJoRYyVfjbIJMrbIG0eqGOUcQuli5F1huZ4u2BSBJ7q2NvxM6wicnDvy8yBbCrJTaxiUhshvVLFb6EfNniAm3tW5EYdiFT+xLwZc5PaGsX69gbMYL2W1W+7OpM5Vt2r/CWTkRiBneKVW07jxDvx1U+Y2G9vi51zKCQ2QOrP9u/51vzrvBn+wXW5nWsvZDVEPPZ8k3funerP4Os0LiOtRayGmYerT5ZoPvhBdAKTetY2w1ZBbSeuv+XRPQfiIACVq+MbscYYgWixPS+1EFr+7FnsBVqywVNTFvI6todshdoLLVrg691PQOu0KyOtRQywPXUf5h+qfK6NP7Y7Lsal5isjmnrRQW5IH3695oF6PpWZuWCIvaAKjEEZAvg9anLBUtMXS8q4BXVwMSgl7cyKhe6egFOrPYamEhMWi509QJ8SSYb5nDARFs2cmLKzbKqfUb2jLC6ldFWSRFb4RMDQ4YBjCdWKYgpN0sUYkDIUIDxxBRbpXqzrJHGzwyTBJliq6SIXbohZt3LFrUbYncqYqrNsvYUGR6w2mirpIgRV8TqHxbA3tWuiBEVMcVmWSGuzCL/nzGXtTLaKlWbJSqxvs5c4C5qZbRVUsQuQF251s7uvgewv9c77YC68kZNTL5ZWmps3z6dZWbwTECNKbdK1WZZYQPb7++hedkiWxltlarNskIH1onZb6aPBCNG1MRG0mvYygGwl/nTLMA6PBGI2Ef1VqnYLC2IrfedBpTXfr+DIabZKhXRXzmR2K/5S4PrR+enweyVmuCniBUw7WLfY+4B1GVNbCULfhkxafRXrkxJUbv//f+quvix7z0gxDTBrzgnVU4lBjoQxCpd8FPEHgCIrQcntgMgdqslJj0nJU7sRrdVyqO/CtaU/W1pGvyK6E+Q2Mow+Gliq6Q1tpIEv5yYLPqrYGOsf5CtTIOfiv7LEzG28cuDXxr9aRNrCX5p9KdIzDj4aWIPtntlFBq7bSU2Ejts0q68aQt+WfQnTaw1+GXRnzSx1uCXddiUiVWtMSbrsCmfK2/bY4widnk6V1Ixpib2Fv3F6Vz5FmPq4Kein5zux97661RDTOiwCRO7NQh+SYdN+J7/xiTGxCBLkViXGJMEWR2qLXe2GjOKMTHIXP43cU8k9krMLMbEIHP3dxfeSOyVmGGMCUHm6G97fJLYKzHDGBOCzIbYOkyJvRIzjDGa2IP1X9ytgwRWczHWRuyMC7I6RGRWwH5p7MYw+OnoLyD+Oj08Xq/EjGOMiv6fd2S2xEKcFXM31k6MDbJUid0am5IOssuEid11IMYGWYrEOsYYF2SJaqxLjHH9IlFiNx1MSdtyhvv/V3pMbGt6qORtmazGOpmS7RdpEjM/Ion9Is298q5TjLH9Ik2NNd1ijOkXSRKrOsYYHWQXSRK76RhjdJAVSRJrOsYYHWQkSWKka4zRQXZIkNimc4zRtpwlSGzbOcYYWyZIrIcp07ZlH1PS/WJ2MmXHICMJm3LSgdgoXVtuesUYHWSzkylPtkQwZcK27GvKdG257dUt2H5BEjXltCOxRG3Z35Sp2rK/KVO1ZX9TMv3ikKIpJ52JJWlLG1OmaUsbUyZpyzsrU9K2LBIh1liZkrHlLglgaztTMra8PJnyZEsEUzK2TCH7N7amZM6WKVSyrcWZUrRlCpWMWJsyMVsCmJKxZfzZ3wCYkrFl7JVsDWFKppLFnv1b6zLG2zL27Ccgpkwo+0Fyn7Nl3NnfwJgynewHyn3OljFn/xbKlMlkP1Tuc7aM987nDs6UiWQ/XO5ztoy1YGwgTclkfxG/xKb2wGhbRlow6GoxASBGZ3+cBWMLmfspiAxcYkz2x1gw7mBzn8v+GFssgc39+EWGIDEm+4uYJUaggDHZH5vINuC5H7vIGgyJsdl/iFZiU0Bio2hF1mDkfswiw5JYvCJDkxiT/RGJbENwcp8vGEWUEpsAE4tSZJgSi1NkqBKLUWS4EmMLRhGdxKYIxEaxiYyR2DhDFlkM92QEWWKcyMK/wrhDl1hsIsOXGCey0P+z0taBxDiR7YIGtnYhMU5kYTeMxonEOJGF3DA2biQWkchcSSwakTmTGCeycBsGcSYxTmShNoytO4nxIjuE70lsiXEiK8KPfWyJcfdkQYqMlRg+MOYyNsTmz7R9jKvXFpHNwo59FxLjRXYI2pNOJMaJLLBStm7cS4xvGLOAPTl2RIxtGEH5kvXk1BUwTmQhlbJmGInxIpsF6kl3EhPC/xCkJ4lLYFzDIEHukxOnxIL05YCeFMI/CF9ynhw7JsaJLIDzJXuedC4xIfz9rxjNgLEvDf9ZUCHm3pMSXx5CCrHpEMD48Pc6yrgQG0Zigi+LcEJskg0056FE2dYHT8p8eQgjxIbypMSXniLjgU2yAYfzZeFl+hNfPCnzZeF/6g/pSZkvC++BTbKBh/Ml+e73NjmwJ2W+9Cz9+dQf2pPeI/MRmOhLj5DxhyMPPCm59/GoYwjAiB/ARF96gmzdeOlJWcXwA5kIbJJ5M0KU+VDLGk9DTB5lHiDzG5gYZYMjE4D5E2J+IvMemCT9h4x/MfQ986Q8/YdDFgYwj5CFAkwSZcMcmDaSdYyzE7IYgMmRub4v+xoSMNmGSchx0AvEfyfPPJ5zyYId5r8k831NfS0yZ39fsAkQmALZ98EizH9gCmQujkxNoMBUyA5DODIMYNlIigzZmVJHenNL3RMZ4p4p3SNDUZgGGZrMFAIjWRY8MpQ0kydYSArTISPHnRtDhgZMtWPCW1NlyPCAaZABMlPyChGYDlkBw+xrExcwHTIIZhpeft9WdL0vA2J21Dza5/swG2QW++ZayytkYJqWYSG0Y6N95jRoYPow6wFt/bVped40C35y0jaFoT3Xx6b1WXkWwYyIwRTHvZbW/ng0ecw4i2POidkcj9/3vNzWL6waw5+fZtFMTjpN8TLH5mW6/VieRTSjc4I903EW1+TIwPIsukGVWXQCw5ZZnsU6ODKbZhEPgjUjNSSeNfMs/slPvAZjlgqvn8zs82yaEi+APSD6vAc2Z56lOqM+0PJxlvR0hJY6rm77QJ6fUNHUtNimJ1ryGecv4Ghy5y//IB+dwAQ9/wA42NXFroICFAAAAABJRU5ErkJggg==" className="cardImgone"/>
       <h2>Charity</h2>
    <h3>5%</h3>
     </div>
      </div>
    </>
  );
}
