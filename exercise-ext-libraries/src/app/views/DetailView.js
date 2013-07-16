// import moment.js library
define(['moment'], function(moment) {

    var template = function(context) {
        context = context || {};
        var items = context.items || [];

        var list = document.createElement('ul');

        items.forEach(function (item, index) {

            /**
             * Split the li element in two separate span fields
             * to display name and the date value
             */
            var listItem = document.createElement('li');

            // name field
            var nameItem = document.createElement('div');
            nameItem.innerHTML = item.name;
            nameItem.classList.add('item-name');
            nameItem.dataset.index = index;
            nameItem.contentEditable = true;
            nameItem.onblur = this.changeListener;

            // date field
            var dateItem = document.createElement('div');

            // use moment.js to format the date
            dateItem.innerHTML = moment(item.date).format('HH:mm:ss');
            dateItem.classList.add('item-date');

            // create the dom structure
            listItem.appendChild(nameItem);
            listItem.appendChild(dateItem);
            list.appendChild(listItem);

        }, this);

        return list;
    };

    var View = function(el, tpl){
        this.el = el || document.body;
        this.template = (tpl || template).bind(this);
    };

    View.prototype.addChangeListener = function(listener) {
        this.changeListener = function(event) {
            var target = event.target;
            var value = target.innerHTML;
            var index = target.dataset.index;
            listener(value, index);
        }
    };

    View.prototype.render = function(context) {
        var html = this.template(context);
        this.el.innerHTML = "";
        this.el.appendChild(html);
    };


    return View;

});