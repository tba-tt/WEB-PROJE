/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal) {
    Drupal.theme.progressBar = function (id) {
        return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
    };

    Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;
        this.element = $(Drupal.theme('progressBar', id));
    };

    $.extend(Drupal.ProgressBar.prototype, {
        setProgress: function setProgress(percentage, message, label) {
            if (percentage >= 0 && percentage <= 100) {
                $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
                $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
            }

            $('div.progress__description', this.element).html(message);
            $('div.progress__label', this.element).html(label);

            if (this.updateCallback) {
                this.updateCallback(percentage, message, this);
            }
        },
        startMonitoring: function startMonitoring(uri, delay) {
            this.delay = delay;
            this.uri = uri;
            this.sendPing();
        },
        stopMonitoring: function stopMonitoring() {
            clearTimeout(this.timer);
            this.uri = null;
        },
        sendPing: function sendPing() {
            if (this.timer) {
                clearTimeout(this.timer);
            }

            if (this.uri) {
                var pb = this;
                var uri = this.uri;

                if (uri.indexOf('?') === -1) {
                    uri += '?';
                } else {
                    uri += '&';
                }

                uri += '_format=json';
                $.ajax({
                    type: this.method,
                    url: uri,
                    data: '',
                    dataType: 'json',
                    success: function success(progress) {
                        if (progress.status === 0) {
                            pb.displayError(progress.data);
                            return;
                        }

                        pb.setProgress(progress.percentage, progress.message, progress.label);
                        pb.timer = setTimeout(function () {
                            pb.sendPing();
                        }, pb.delay);
                    },
                    error: function error(xmlhttp) {
                        var e = new Drupal.AjaxError(xmlhttp, pb.uri);
                        pb.displayError("<pre>".concat(e.message, "</pre>"));
                    }
                });
            }
        },
        displayError: function displayError(string) {
            var error = $('<div class="messages messages--error"></div>').html(string);
            $(this.element).before(error).hide();

            if (this.errorCallback) {
                this.errorCallback(this);
            }
        }
    });
})(jQuery, Drupal);
