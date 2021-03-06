import test from 'ava';
import fn from './';

test('camelCase', t => {
	t.is(fn('foo'), 'foo');
	t.is(fn('foo-bar'), 'fooBar');
	t.is(fn('foo-bar-baz'), 'fooBarBaz');
	t.is(fn('foo--bar'), 'fooBar');
	t.is(fn('--foo-bar'), 'fooBar');
	t.is(fn('--foo--bar'), 'fooBar');
	t.is(fn('FOO-BAR'), 'fooBar');
	t.is(fn('FOÈ-BAR'), 'foèBar');
	t.is(fn('-foo-bar-'), 'fooBar');
	t.is(fn('--foo--bar--'), 'fooBar');
	t.is(fn('foo.bar'), 'fooBar');
	t.is(fn('foo..bar'), 'fooBar');
	t.is(fn('..foo..bar..'), 'fooBar');
	t.is(fn('foo_bar'), 'fooBar');
	t.is(fn('__foo__bar__'), 'fooBar');
	t.is(fn('__foo__bar__'), 'fooBar');
	t.is(fn('foo bar'), 'fooBar');
	t.is(fn('  foo  bar  '), 'fooBar');
	t.is(fn('-'), '-');
	t.is(fn(' - '), '-');
	t.is(fn('fooBar'), 'fooBar');
	t.is(fn('fooBar-baz'), 'fooBarBaz');
	t.is(fn('foìBar-baz'), 'foìBarBaz');
	t.is(fn('fooBarBaz-bazzy'), 'fooBarBazBazzy');
	t.is(fn('FBBazzy'), 'fbBazzy');
	t.is(fn('F'), 'f');
	t.is(fn('FooBar'), 'fooBar');
	t.is(fn('Foo'), 'foo');
	t.is(fn('FOO'), 'foo');
	t.is(fn('foo', 'bar'), 'fooBar');
	t.is(fn('foo', '-bar'), 'fooBar');
	t.is(fn('foo', '-bar', 'baz'), 'fooBarBaz');
	t.is(fn('', ''), '');
	t.is(fn('--'), '');
	t.is(fn(''), '');
	t.is(fn('--__--_--_'), '');
	t.is(fn('---_', '--', '', '-_- '), '');
	t.is(fn('foo bar?'), 'fooBar?');
	t.is(fn('foo bar!'), 'fooBar!');
	t.is(fn('foo bar$'), 'fooBar$');
	t.is(fn('foo-bar#'), 'fooBar#');
	t.is(fn('XMLHttpRequest'), 'xmlHttpRequest');
	t.is(fn('AjaxXMLHttpRequest'), 'ajaxXmlHttpRequest');
	t.is(fn('Ajax-XMLHttpRequest'), 'ajaxXmlHttpRequest');
});
