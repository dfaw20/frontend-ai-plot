module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react"
	],
	"rules": {
		"indent": [
			"warn",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"semi": [
			"warn",
			"never"
		],
		"no-warning-comments": [
			"warn"
		],
        "@typescript-eslint/no-unused-vars": [
            "error"
        ],
		"no-console": [
			"warn"
		],
		"no-mixed-spaces-and-tabs": "warn"
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
