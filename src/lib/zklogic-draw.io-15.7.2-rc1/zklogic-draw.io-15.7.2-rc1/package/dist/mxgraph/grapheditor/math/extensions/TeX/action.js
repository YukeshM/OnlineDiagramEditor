MathJax.Extension["TeX/action"]={version:"2.7.9"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",(function(){var t=MathJax.InputJax.TeX,a=MathJax.ElementJax.mml;t.Definitions.Add({macros:{toggle:"Toggle",mathtip:"Mathtip",texttip:["Macro","\\mathtip{#1}{\\text{#2}}",2]}},null,!0),t.Parse.Augment({Toggle:function(e){for(var i,n=[];"\\endtoggle"!==(i=this.GetArgument(e));)n.push(t.Parse(i,this.stack.env).mml());this.Push(a.maction.apply(a,n).With({actiontype:a.ACTIONTYPE.TOGGLE}))},Mathtip:function(t){var e=this.ParseArg(t),i=this.ParseArg(t);this.Push(a.maction(e,i).With({actiontype:a.ACTIONTYPE.TOOLTIP}))}}),MathJax.Hub.Startup.signal.Post("TeX action Ready")})),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/action.js");