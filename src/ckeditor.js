/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
// Standard build plugins.
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
// Promotool required plugins.
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Font from '@ckeditor/ckeditor5-font/src/font'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock'
// import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar'
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui'
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat'

import ptColors from './colorPalette'

/* ********		MEDIA FILES DONT NEEDED FOR PT	******** */
// import Image from '@ckeditor/ckeditor5-image/src/image'
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment,
	Font,
	Underline,
	Strikethrough,
	Code,
	Indent,
	IndentBlock,
	// BlockToolbar,
	HeadingButtonsUI,
	ParagraphButtonUI,
	RemoveFormat,
	/* ********		MEDIA FILES DONT NEEDED FOR PT	******** */
	// Image,
	// ImageCaption,
	// ImageStyle,
	// ImageToolbar,
	// ImageUpload,
	// MediaEmbed,
]

// Editor configuration.
ClassicEditor.defaultConfig = {
	// blockToolbar: [
	// 	'paragraph',
	// 	'heading1',
	// 	'heading2',
	// 	'heading3',
	// 	'|',
	// 	'alignment',
	// 	'|',
	// 	'bulletedList',
	// 	'numberedList',
	// 	'outdent',
	// 	'indent',
	// ],
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'alignment',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
			'|',
			'removeFormat',
			'|',
			'link',
			'blockQuote',
			'code',
			'insertTable',
			'|',
			'undo',
			'redo',
		],
	},
	fontFamily: {
		options: [
			'default',
			'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif',
			'Ubuntu, Arial, sans-serif',
			'Ubuntu Mono, Courier New, Courier, monospace',
		],
	},
	fontSize: {
		options: ['default', 10, 12, 14, 16, 18, 20, 22],
	},
	fontColor: {
		colors: ptColors,
	},
	fontBackgroundColor: {
		colors: ptColors,
		// [
		// 	{
		// 		color: 'hsl(0, 75%, 60%)',
		// 		label: 'Red',
		// 	},
		// 	{
		// 		color: 'hsl(30, 75%, 60%)',
		// 		label: 'Orange',
		// 	},
		// 	{
		// 		color: 'hsl(60, 75%, 60%)',
		// 		label: 'Yellow',
		// 	},
		// 	{
		// 		color: 'hsl(90, 75%, 60%)',
		// 		label: 'Light green',
		// 	},
		// 	{
		// 		color: 'hsl(120, 75%, 60%)',
		// 		label: 'Green',
		// 	},
		// ],
	},
	// image: {
	// 	toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative'],
	// },
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	indentBlock: {
		offset: 1,
		unit: 'rem',
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
}
