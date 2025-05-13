<!-- <h2 id="projects" style="margin: 2px 0px -15px;">Projects</h2> -->
<h2 id="projects">
Projects
</h2>

<div class="publications">
<ol class="bibliography">
<!-- <p>&ast; indicates contributed equally and <i class="fa-regular fa-envelope fa-xs"></i> is corresponding author.</p> -->
{% for link in site.data.projects.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title auto-kaiti"><a href="{{ link.page }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="shortinfo">{{ link.shortinfo }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <!-- <i style="color:#e74d3c" >{{ link.notes }}</i> -->
      <span style="color: #e74d3c; font-weight: bold; font-size: 1.05em; font-family: 'Courier New', monospace; background-color: #fff3cd; padding: 2px 6px; border-radius: 4px;">
        Note: {{ link.notes }}
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

<!-- 加上中文字体样式和JS自动识别 -->
<style>
.chinese {
  font-family: 'Ma Shan Zheng', 'STKaiti', 'KaiTi', 'AR PL KaitiM GB', 'KaiTi SC', 'KaiTi TC', 'SimKai', 'PingFang SC', serif;
}
</style>

<script>
// 自动识别并给中文加上楷体字体
document.querySelectorAll('.auto-kaiti').forEach(el => {
  el.innerHTML = el.innerHTML.replace(/([\u4e00-\u9fa5]+)/g, '<span class="chinese">$1</span>');
});
</script>