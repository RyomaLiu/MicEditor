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

        this.create_i();
        
        this.create_font();

        this.create_color();

        this.create_quote();
        
        this.create_code();
        
        this.create_image();
        
        this.create_table();
        
        this.create_back();
        
        this.create_forwad();
        


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
        item_h.innerHTML='<b>H</b>';
        item_h.addEventListener('mouseenter',function(){
            
        });
        
        
        let item_h_ul = document.createElement('ul');
        
        let item_h1 = document.createElement('li');
        item_h1.innerHTML = 'H1';
        item_h_ul.appendChild(item_h1);
        
        let item_h2 = document.createElement('li');
        item_h2.innerHTML = 'H2';
        item_h_ul.appendChild(item_h2);
        
        let item_h3 = document.createElement('li');
        item_h3.innerHTML = 'H3';
        item_h_ul.appendChild(item_h3);
        
        let item_h4 = document.createElement('li');
        item_h4.innerHTML = 'H4';
        item_h_ul.appendChild(item_h4);
        
        let item_h5 = document.createElement('li');
        item_h5.innerHTML = 'H5';
        item_h_ul.appendChild(item_h5);
        
        let item_h6 = document.createElement('li');
        item_h6.innerHTML = 'H6';
        item_h_ul.appendChild(item_h6);
        
        item_h.appendChild(item_h_ul);

        this.items_container.appendChild(item_h);
    },

    create_b: function () {
        let item_b = document.createElement('li');
        item_b.innerHTML = '<b>B</b>';

        this.items_container.appendChild(item_b);
    },
    create_i: function () {
        let item_i = document.createElement('li');
        item_i.innerHTML = '<i>I</i>';

        this.items_container.appendChild(item_i);
    },
    create_color: function () {
        let item_color = document.createElement('li');
        item_color.innerHTML = 'COL';

        this.items_container.appendChild(item_color);
    }
    ,
    create_font: function () {
        let item_font = document.createElement('li');
        item_font.innerHTML = 'T';

        this.items_container.appendChild(item_font);
    }
    ,
    create_quote: function () {
        let item_quote = document.createElement('li');
        item_quote.innerHTML = '\“';

        this.items_container.appendChild(item_quote);
    }
    
    ,
    create_code: function () {
        let item_code = document.createElement('li');
        item_code.innerHTML = '<>';

        this.items_container.appendChild(item_code);
    },
    create_image: function () {
        let item_image = document.createElement('li');
        item_image.innerHTML = 'PIC';

        this.items_container.appendChild(item_image);
    }
    ,
    create_table: function () {
        let item_table = document.createElement('li');
        item_table.innerHTML = 'TBL';

        this.items_container.appendChild(item_table);
    }
     ,
    create_back: function () {
        let item_back = document.createElement('li');
        item_back.innerHTML = 'BAK';

        this.items_container.appendChild(item_back);
    } ,
    create_forwad: function () {
        let item_forwad = document.createElement('li');
        item_forwad.innerHTML = 'FWD';

        this.items_container.appendChild(item_forwad);
    }
}
