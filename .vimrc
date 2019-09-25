function! DoMakeComponent(name, ...)
  let s:is_class = get(a:, 1, '')
  :execute "!bin/make_component.sh" a:name s:is_class
  :execute "e" "catch-of-the-day/src/components/" . a:name . ".js"
endfunction

command! -nargs=* MakeComponent :call DoMakeComponent(<f-args>)
