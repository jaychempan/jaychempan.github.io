<!-- <h2 id="publications" style="margin: 2px 0px -15px;">Publications [<a href="https://scholar.google.com/citations?user=nRPD3tAAAAAJ&hl=en">Google Scholar</a>]</h2> -->

<h2 id="publications">
  Publications [<a href="https://scholar.google.com/citations?user=nRPD3tAAAAAJ&hl=en">Google Scholar</a>]
</h2>

<div class="publications">
<ol class="bibliography">
<p style="text-align:center; font-size:14px;"><font color="#006621" face="Arial Black"><b>Stand on the shoulders of giants, learning from the great work</b></font></p>
<!-- <p><font color="#006621"><b>Stand on the shoulders of giants, learning from the great work of others.</b></font></p> -->
<p style="text-align:center;">&ast; indicates contributed equally and <i class="fa-regular fa-envelope fa-xs"></i> is corresponding author.</p>
{% for link in site.data.publications.main %}

<li>
<div class="pub-row {% if link.highlight %}highlight{% endif %}">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical" style="color: gray;">{{ link.conference }}
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.benchmark %} 
      <a href="{{ link.benchmark }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Benchmark</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <!-- <i class="note" style="color:#e74d3c">{{ link.notes }}</i> -->
      <span style="color: #e74d3c; font-weight: bold; font-size: 0.9em;">
        {{ link.notes }}
      </span>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>

