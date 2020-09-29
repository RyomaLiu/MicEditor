let MicEditor = {

    create: function (id) {
        // 编辑器
        this.mic_editor = document.getElementById(id);
        this.mic_editor.classList.add('mic_editor');

        // 编辑器菜单
        this.mic_menu = document.createElement('div');
        this.mic_menu.setAttribute('id', 'mic_menu');
        this.mic_menu.classList.add('mic_menu');

        this.items_container = document.createElement('ul');
        this.items_container.setAttribute('id', 'items_container');
        this.items_container.classList.add('items_container');

        this.mic_menu.appendChild(this.items_container);

        this.create_h();
        
        this.create_b();


        this.mic_editor.appendChild(this.mic_menu);


        // 编辑区域
        this.mic_main = document.createElement('div');
        this.mic_main.setAttribute('id', 'mic_main');
        this.mic_main.classList.add('mic_main');

        this.mic_editor.appendChild(this.mic_main);


        return this;
    },

    editable: function (editable) {
        this.mic_main.setAttribute('contentEditable', editable);

        return this;
    },

    create_h: function () {
        let item_h = document.createElement('li');
        item_h.innerHTML = '<b>H1</b>';

        this.items_container.appendChild(item_h);
    },

    create_b: function () {
        let item_b = document.createElement('li');
        item_b.innerHTML = '<b>B</b>';

        this.items_container.appendChild(item_b);
    }
}
