" Call the `make_component` script
function! DoMakeComponent(name, ...)
  " parse is_sfc from the second argument
  let s:is_sfc = get(a:, 1, '')
  " call the script
  execute "!bin/make_component.sh" a:name s:is_sfc
  " open the new file
  execute "e" "catch-of-the-day/src/components/" . a:name . ".js"
endfunction
command! -nargs=* MakeComponent :call DoMakeComponent(<f-args>)

function! DoUpgradeComponent()
  " change the declaration line
  %s/^const \(\w\+\) = (\(props\)\?) => (/class \1 extends React.Component {/

  " insert render method boilerplate
  put ='  render () {'
  put ='    return ('

  " indent everything but the last line (export default line)
  .+1,$-1>>

  " insert closing }
  put! ='  }'
  put ='}'
endfunction
command! UpgradeComponent :call DoUpgradeComponent()
