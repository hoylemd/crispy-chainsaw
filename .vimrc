function! DoMakeComponent(name)
  :silent execute "!bin/make_component.sh" a:name
  :silent execute "e" "catch-of-the-day/src/components/" . a:name . ".js"
endfunction

command! -nargs=1 MakeComponent :call DoMakeComponent(<f-args>)
