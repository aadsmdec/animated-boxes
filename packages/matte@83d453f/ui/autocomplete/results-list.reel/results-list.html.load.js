montageDefine("83d453f","ui/autocomplete/results-list.reel/results-list.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=results-list.css>\n    <script type=text/montage-serialization>{"results":{"prototype":"montage/core/range-controller","properties":{"selectAddedObjects":true}},"repetition1":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"repetition1"},"contentController":{"@":"results"},"isSelectionEnabled":true},"bindings":{"contentController":{"<-":"@owner.contentController"},"activeIterations.rangeContent()":{"<-":"iterations.filter{@owner.activeIndexes.has(index)}"}}},"resultItem":{"prototype":"ui/autocomplete/result-item.reel","properties":{"element":{"#":"result-item"}},"bindings":{"textPropertyPath":{"<-":"@owner.textPropertyPath"},"object":{"<-":"@repetition1:iteration.object"}}},"owner":{"prototype":"ui/autocomplete/results-list.reel","properties":{"element":{"#":"results-list"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=results-list class=results-list>\n        <ul class=repetition data-montage-id=repetition1>\n            <li class=result-item data-montage-id=result-item></li>\n        </ul>\n    </div>\n\n\n</body></html>'});