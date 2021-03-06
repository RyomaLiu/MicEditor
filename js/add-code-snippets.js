let showToast = (msg) => {
    if (this.isAdded) return;
    isAdded = true;
    let msgcontainer = document.createElement('div');
    msgcontainer.style = 'text-align:center;left:auto;position:fixed;z-index:10000;background:red;padding:5px 10px;border-radius:5px;left:50%;transform:translateX(-50%);top:5px;transition:all .5s';
    msgcontainer.textContent = msg;
    document.body.appendChild(msgcontainer);
    setTimeout(() => {
        msgcontainer.style.opacity = 0;
        msgcontainer.parentElement.removeChild(msgcontainer);
        isAdded = false;
    }, 1500);

};

let acsnp = (function () {
    'use strict';

    const initAddCodeSnippets = () => {
        if (initAddCodeSnippets.called) return;
        initAddCodeSnippets.called = true;
        document.querySelectorAll('.acsnp').forEach((snippet) => {

            snippet.addEventListener('click', () => {


                let acsnpModal = document.createElement('div');
                acsnpModal.classList.add('acsnp-modal');
                document.body.appendChild(acsnpModal);
                setTimeout(() => {
                    acsnpModal.style.opacity = '1';
                }, 0);


                let acsnpStyleSheet = document.createElement('style');
                acsnpStyleSheet.innerHTML = '.acsnp-modal{height:100vh;width:100vw;background:rgba(0,0,0,.55);top:0;left:0;display:flex;flex-direction:column;position:fixed;z-index:1}.acsnp-main-container{height:80%;width:70%;margin:auto}.acsnp-opt-area{background:#fff;border-bottom:dashed .5px rgba(0,0,0,.55);border-top-left-radius:5px;border-top-right-radius:5px;height:7%;width:100%}.acsnp-code-snippet-input{resize:none;outline:0;padding:10px 15px;height:calc(93% - 10px - 10px);width:calc(100% - 15px - 15px);background:#fff;font-size:1pc;border:0}.noBtn,.okBtn{padding:5px 10px;background:#33e;margin:auto;cursor:pointer;color:#fff;border-radius:5px;margin:10px;-webkit-user-select:none}.okBtn:hover{background:#33d}.okBtn:active{background:#33a}.noBtn{background:#f11}.noBtn:hover{background:#f33}.noBtn:active{background:#a11}';
                //                acsnpModal.appendChild(acsnpStyleSheet);

                let acsnpMainMontainer = document.createElement('div');
                acsnpMainMontainer.classList.add('acsnp-main-container');
                acsnpModal.appendChild(acsnpMainMontainer);

                let acsnpOptArea = document.createElement('div');
                acsnpOptArea.classList.add('acsnp-opt-area');
                acsnpMainMontainer.appendChild(acsnpOptArea);

                let acsnpTitle = document.createElement('span');
                acsnpTitle.classList.add('acsnp-title');
                acsnpTitle.textContent = 'CodeSnippet';
                acsnpOptArea.appendChild(acsnpTitle);

                let acsnpLanguage = document.createElement('input');
                acsnpLanguage.setAttribute('maxlength', 20);
                acsnpLanguage.setAttribute('placeholder', 'code language');
                acsnpLanguage.classList.add('acsnp-ipu-primary');
                acsnpLanguage.onfocus = (evt) => {
                    let rect = acsnpLanguage.getBoundingClientRect();
                    let lgList = document.createElement('ul');
                    lgList.style.left = `${rect.left}px`;
                    lgList.style.width = `${rect.width}px`;
                    lgList.style.top = `${rect.top + rect.height}px`;
                    lgList.style.height = '300px';
                    lgList.style.display = 'block';
                    lgList.style.background = '#f00';
                    lgList.style.position = 'fixed';
                    lgList.style.zIndex = 10010;
                    document.body.appendChild(lgList);
                    
                    console.log(rect.top+rect.height);
                    console.log(lgList.style.top);

                    acsnpLanguage.onblur = (evt) => {
                        lgList.parentElement.removeChild(lgList);
                    };
                };
                acsnpOptArea.appendChild(acsnpLanguage);


                let acsnpPreview = document.createElement('a');
                acsnpPreview.classList.add('acsnp-btn-regular');
                acsnpPreview.textContent = 'Preview';
                acsnpPreview.setAttribute('data-preview', '1');
                acsnpPreview.onclick = (evt) => {
                    if (+evt.target.dataset.preview) {
                        let codeSnippet = acsnpCodeSnippetInput.value.replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;')
                            .replace(/'/g, '&#x27;');;
                        if (codeSnippet == '') {
                            showToast('This is no code snippet added!');
                            return;
                        }
                        acsnpPreview.textContent = 'Edit';
                        acsnpPreview.setAttribute('data-preview', '0');
                        acsnpCodeSnippetInput.style.display = 'none';
                        acsnpCodeSnippetPreview.style.display = 'block';
                        (() => {
                            let hljsPreCode = document.createElement('pre');
                            hljsPreCode.innerHTML = `<code class='language-javascript'>${codeSnippet}</code>`;
                            acsnpCodeSnippetPreview.innerHTML = hljsPreCode.outerHTML;
                            hljs.highlightBlock(acsnpCodeSnippetPreview);
                            hljs.lineNumbersBlock(acsnpCodeSnippetPreview);

                        })();
                    } else {
                        acsnpPreview.textContent = 'Preview';
                        acsnpPreview.setAttribute('data-preview', '1');
                        acsnpCodeSnippetInput.style.display = 'block';
                        acsnpCodeSnippetPreview.style.display = 'none';

                    }
                };
                acsnpOptArea.appendChild(acsnpPreview);

                let acsnpDone = document.createElement('a');
                acsnpDone.classList.add('acsnp-btn-regular');
                acsnpDone.textContent = 'Done';
                acsnpDone.onclick = (evt) => {

                };
                acsnpOptArea.appendChild(acsnpDone);

                let acsnpClose = document.createElement('a');
                acsnpClose.classList.add('acsnp-btn-primary');
                acsnpClose.textContent = 'Close';
                acsnpClose.onclick = (evt) => {
                    acsnpModal.style.opacity = '0';
                    setTimeout(() => {
                        acsnpModal.parentElement.removeChild(acsnpModal);
                    }, 500);

                };
                acsnpOptArea.appendChild(acsnpClose);



                let acsnpCodeSnippetInput = document.createElement('textarea');
                acsnpCodeSnippetInput.classList.add('acsnp-code-snippet-input');
                acsnpMainMontainer.appendChild(acsnpCodeSnippetInput);

                let acsnpCodeSnippetPreview = document.createElement('div');
                acsnpCodeSnippetPreview.classList.add('acsnp-code-snippet-preview');
                acsnpMainMontainer.appendChild(acsnpCodeSnippetPreview);


            });


            if (document.createEvent) {
                let evt = document.createEvent('HTMLEvents');
                evt.initEvent('click', true, true);
                snippet.dispatchEvent(evt);
            }

        });


    };


    function initAddCodeSnippetsOnLoad() {
        window.addEventListener('DOMContentLoaded', initAddCodeSnippets, false);
    }

    const ACSNP = function (acsnp) {
        Object.assign(acsnp, {
            initAddCodeSnippetsOnLoad
        });

        return acsnp;
    };

    let addCodeSnippet = ACSNP({});

    return addCodeSnippet;


}());
