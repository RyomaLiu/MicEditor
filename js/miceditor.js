class MicEditor {

    constructor(id) {
        this.mic_editor = document.getElementById(id);
        this.mic_editor.classList.add('mic_editor');

        this.selectionArray = new Array();

    }

    create() {
        this.createMenu();

        this.createContentContainer();


    }

    createMenu() {
        this.mic_menu = document.createElement('div');
        this.mic_menu.setAttribute('id', 'mic_menu');
        this.mic_menu.classList.add('mic_menu');
        this.mic_editor.appendChild(this.mic_menu);

        this.mic_menu_items = document.createElement('ul');
        this.mic_menu_items.setAttribute('id', 'mic_menu_items');
        this.mic_menu_items.classList.add('mic_menu_items');
        this.mic_menu.appendChild(this.mic_menu_items);

        this.createH1();
        this.createH2();
        this.createH3();
        this.createBold();
        this.createItalic();
        this.createUnderline();
        this.createStrike();
        this.createFont();
        this.createPickColor();
        this.createEmoji();
        this.createImage();
        this.createTable();
        this.createLink();
        this.createQuote();
        this.createCode();
        this.createToc();
        this.createUndo();
        this.createRedo();

    }

    createContentContainer() {
        this.mic_content = document.createElement('div');
        this.mic_content.setAttribute('id', 'mic_content');
        this.mic_content.classList.add('mic_content');
        this.mic_editor.appendChild(this.mic_content);

        let history = {
            maxLength: 200,
            provider: (done) => {
                done(this.mic_editor.outeHTML);
            }(this),
            onUpdate: () => {
                if (!history) {
                    return;
                }
            }
        }

        this.mic_content.addEventListener('keypress', () => {

        });

        this.setEditable();
    }

    setEditable(editable = true) {
        this.mic_content.setAttribute('contentEditable', editable);
    }

    createH1() {
        let item_h1 = document.createElement('li');
        item_h1.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-type-h1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"/>
        </svg>`;

        item_h1.addEventListener('click', function () {
            let selection = document.getSelection();
            if (selection.isCollapsed) {
                return;
            }
            let range = selection.getRangeAt(0);

            let nodes = range.cloneContents().childNodes;
            let oHTML = '';

            let aa = (nodes) => {
                for (let node of nodes) {
                    switch (node.nodeType) {
                        case Node.TEXT_NODE:
                            oHTML += `<b>${node.data}</b>`;
                            console.log(node.nodeName);
                            break;
                        case Node.ELEMENT_NODE:
                            if (node.childElementCount > 0) {
                                console.log(node.nodeName);
                                aa(node.childNodes);
                            } else {
                                oHTML += node.outerHTML;
                                console.log(node.nodeName);
                            }

                            break;
                    }
                }
            };


            aa(nodes);


            let frag = document.createRange().createContextualFragment(oHTML);



            range.deleteContents();
            range.insertNode(frag);


        }.bind(this));

        this.mic_menu_items.appendChild(item_h1);
    }

    createH2() {
        let item_h2 = document.createElement('li');
        item_h2.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-type-h2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"/>
        </svg>`;


        item_h2.addEventListener('click', function () {
            mic_content.innerHTML = 'hello <span style="font-weight:bold;">this is bold</span> <h1>tile1</h1><span class="bold-class">also bold</span><a href="https://www.google.co.jp">新しい正解</a><i>TT<strong>aはは山頂123</strong>TTD<B>asdgasdgははｈへへｈ</B><b>asdfsad</b>DDDDDDD</i>';
        });

        this.mic_menu_items.appendChild(item_h2);
    }

    createH3() {
        let item_h3 = document.createElement('li');
        item_h3.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-type-h3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"/>
        </svg>`;

        item_h3.addEventListener('click', function () {
            document.execCommand('bold', false, null);
        });

        this.mic_menu_items.appendChild(item_h3);
    }

    createBold() {
        let item_bold = document.createElement('li');
        item_bold.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-type-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
        </svg>`;
        let click = function () {
            execMECommand(MECommand.BOLD, '12px');
        }.bind(this);
        item_bold.addEventListener('click', click);

        this.mic_menu_items.appendChild(item_bold);
    }


    createPickColor() {
        let item_color = document.createElement('li');
        item_color.innerHTML = `
        <svg width="35px" height="35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
            <path d="M60 47.41C60 57.12 52.16 65 42.5 65C32.84 65 25 57.12 25 47.41C25 37.69 32.84 29.81 42.5 15C52.16 29.81 60 37.69 60 47.41Z" id="b7eFc4sBk" />
        </svg>`;

        item_color.addEventListener('click', () => {
            document.execCommand('h1', false, null);
        });

        this.mic_menu_items.appendChild(item_color);
    }

    createFont() {
        let item_font = document.createElement('li');
        item_font.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-fonts" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.258 3H3.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L12.258 3z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_font);
    }

    createQuote() {
        let item_quote = document.createElement('li');
        item_quote.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-blockquote-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm5 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            <path d="M3.734 6.352a6.586 6.586 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299 1.38 1.38 0 0 0-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 0 0-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_quote);
    }


    createLink() {
        let item_link = document.createElement('li');
        item_link.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-link" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_link);
    }

    createCode() {
        let item_code = document.createElement('li');
        item_code.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_code);
    }

    createImage() {
        let item_image = document.createElement('li');
        item_image.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 17 16" class="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_image);
    }

    createTable() {
        let item_table = document.createElement('li');
        item_table.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-table" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_table);
    }

    createUndo() {
        let item_back = document.createElement('li');
        item_back.setAttribute('id', 'undo');
        item_back.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>`;

        item_back.addEventListener('click', undoFn);

        this.mic_menu_items.appendChild(item_back);

    }

    createRedo() {
        let item_forwad = document.createElement('li');
        item_forwad.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-arrow-counterclockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_forwad);
    }

    createEmoji() {
        let item_emoji = document.createElement('li');
        item_emoji.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-emoji-laughing" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5z"/>
            <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_emoji);
    }

    createToc() {
        let item_toc = document.createElement('li');
        item_toc.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-view-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_toc);
    }

    createItalic() {
        let item_italic = document.createElement('li');
        item_italic.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-type-italic" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_italic);
    }

    createUnderline() {
        let item_underline = document.createElement('li');
        item_underline.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-type-underline" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z"/>
            <path fill-rule="evenodd" d="M12.5 15h-9v-1h9v1z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_underline);
    }

    createStrike() {
        let item_strike = document.createElement('li');
        item_strike.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-type-strikethrough" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.527 13.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM6.602 6.5H5.167a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z"/>
            <path fill-rule="evenodd" d="M15 8.5H1v-1h14v1z"/>
        </svg>`;

        this.mic_menu_items.appendChild(item_strike);
    }

}


let MECommand = {
    BOLD: 'bold',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    ITALIC: 'i',
    UNDERLLINE: 'u',
    STRIKELINE: 'del'
};

let execMECommand = (...cmd) => {
    if (document.getSelection().rangeCount) {

        switch (cmd[0]) {
            case MECommand.BOLD: {
                let checkBold = () => {
                    let selection = document.getSelection();
                    let range = selection.getRangeAt(0);
                    let nodes = range.cloneContents().childNodes;
                    let isBold = true;
                    let loopNodes = (nodes) => {
                        for (let node of nodes) {
                            switch (node.nodeType) {
                                case Node.TEXT_NODE: {
                                    if (node.data.trim() != '') {
                                        isBold = false;
                                    }

                                    break;
                                }
                                case Node.ELEMENT_NODE: {
                                    if (node.childElementCount) {
                                        loopNodes(node.childNodes);
                                    } else {
                                        if (node.parentNode.nodeName.toLocaleLowerCase() != 'b' &&
                                            node.nodeName.toLocaleLowerCase() != 'b') {

                                            getComputedStyle(node);
                                        }
                                    }
                                    break;
                                }
                            }

                            if (!isBold) {
                                break;
                            }
                        }
                    };

                    loopNodes(nodes);

                    return isBold;
                };

                let isBold = checkBold();
                console.log(isBold);
                break;
            }
        }

    }
};

let getStyle = (styleName) => {
    let sheets = document.styleSheets;
    let styles = new Array();

    let query = function (rules) {
        for (let rule of rules) {
            if (rule.selectorText && styleName.toLocaleLowerCase().match(rule.selectorText.toLocaleLowerCase())) {
                return rule.style;
            }
        }
    };

    for (let sheet of sheets) {
        styles.push(query(sheet.rules));
    }

    return styles.pop();
};
