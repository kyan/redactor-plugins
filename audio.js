if (!RedactorPlugins) var RedactorPlugins = {};

(function($)
{
  RedactorPlugins.audio = function()
  {
    return {
      reUrlMp3: /https?:\/\/(www\.)*(.*?).(wav|mp3)/,
      langs: {
        en: {
          "audio": "Audio",
          "audio-html-code": "Audio link"
        }
      },
      getTemplate: function()
      {
        return String()
        + '<div class="modal-section" id="redactor-modal-audio-insert">'
          + '<section>'
            + '<label>Add the url to your MP3 (it must be a public url)</label>'
            + '<input type="text" id="redactor-insert-audio-area"/>'
          + '</section>'
        + '</div>';
      },
      init: function()
      {
        var button = this.button.add('clips', 'Audio');
        this.button.addCallback(button, this.audio.show);
      },
      show: function()
      {
        var self = this;
        this.modal.addTemplate('audio', this.audio.getTemplate());

        this.modal.load('audio', 'Insert Audio', 700);
        this.modal.createCancelButton();

        var button = this.modal.createActionButton('Insert');
        button.on('click', function() {
          self.audio.insert();
        });
        this.modal.show();

        $('#redactor-insert-audio-area').focus();
      },
      insert: function()
      {
        var data = $('#redactor-insert-audio-area').val();

        if (data.match(this.audio.reUrlMp3)) {
          data = '<audio src="' + data + '" controls><p>If you are reading this, it is because your browser does not support the audio element.</p></audio>';
        }

        this.modal.close();
        this.placeholder.remove();
        this.buffer.set();
        this.insert.html(data);
      }
    };
  };
})(jQuery);
