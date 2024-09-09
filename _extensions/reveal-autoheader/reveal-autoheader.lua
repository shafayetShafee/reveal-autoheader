local str = pandoc.utils.stringify

local function ensureHtmlDeps()
  quarto.doc.add_html_dependency({
    name = "reveal-autoheader",
    version = "1.0.0",
    scripts = {
        { path = "reveal-autoheader.js", attribs = {defer = "true"}}
      }
  })
end

if quarto.doc.is_format('revealjs') then
  -- Ensuring the dependencies got loaded before proceeding
  ensureHtmlDeps()
  
  function Header(el)
    local slevel = PANDOC_WRITER_OPTIONS.slide_level or 2
    if el.level == slevel then
      local hname = str(el.content)
      el.attributes['hname'] = hname
      el.attributes['slevel'] = slevel
      return el
    end
  end
  
end
