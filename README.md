### Install

```
git clone https://github.com/Deliveos/indent-gen.git
cd indent-get
npm install
node indent-get -h
```

### Keys and toggles

- Toggle `--version`. Show current package version number.
- Key `-f` or `--file`. File name, or path with file name. The script does not create new directories, only a file, so you need to specify the existing directories.
- Key `-s` or `--start`. Start of the range. Default value 0.
- Key `-e` or `--end`. End of the range. Default value 0.
- Key `-t` or `--type`. Margin or padding type. Valid values:

  - `m` equal _margin_
  - `mt` equal _margin-top_
  - `mr` equal _margin-right_
  - `mb` equal _margin-bottom_
  - `ml` equal _margin-left_
  - `p` equal _padding_
  - `pt` equal _padding-top_
  - `pr` equal _padding-right_
  - `pb` equal _padding-bottom_
  - `pl` equal _padding-left_

- Key `-u` or `--units`. Units for padding or margin. Default units is px. Valid values:<br>
  `px`, `%`, `em`, `rem`, `vh`, `vw`, `vmin`, `vmax`, `ex`, `ch`
- Toggle `-h` or `--help`. Show help.
- Toggle `--add-units`. Add units to class name

### Examples

##### Basic

Basic functionality with a minimal set of keys. As a result, we get a file located in the same directory as the executable file:

```
node indent-gen.js --file style.css --type p --end 5
```

In the style.css file:

```
.p-0 { padding: 0px; }
.p-1 { padding: 1px; }
.p-2 { padding: 2px; }
.p-3 { padding: 3px; }
.p-4 { padding: 4px; }
.p-5 { padding: 5px; }
```

This command can be shortened:

```
node indent-gen.js -f style.css -t p -e 5
```

##### Add units to class name

In order to add units of measurement to the class name, use the toggle `--add-units`:

```
node indent-gen.js -f style.css -t p -e 5 --add-units
```

In the style.css file:

```
.p-0px { padding: 0px; }
.p-1px { padding: 1px; }
.p-2px { padding: 2px; }
.p-3px { padding: 3px; }
.p-4px { padding: 4px; }
.p-5px { padding: 5px; }
```

##### Units

Units of measure are passed through the key `--units` or `-u`:

```
node indent-gen.js -f style.css -t p -e 5 --add-units -u rem
```

In the style.css file:

```
.p-0rem { padding: 0rem; }
.p-1rem { padding: 1rem; }
.p-2rem { padding: 2rem; }
.p-3rem { padding: 3rem; }
.p-4rem { padding: 4rem; }
.p-5rem { padding: 5rem; }
```

##### Types

Types of measure are passed through the key `--type` or `-t` (required key):

```
node indent-gen.js -f style.css -e 5 -t ml
```

In the style.css file:

```
.ml-0 { margin-left: 0px; }
.ml-1 { margin-left: 1px; }
.ml-2 { margin-left: 2px; }
.ml-3 { margin-left: 3px; }
.ml-4 { margin-left: 4px; }
.ml-5 { margin-left: 5px; }
```

##### Range

The range can be set using the keys `--start` or `-s`, `--end` or `-e`. Key `-end` or `-e` is required key:

```
node indent-gen.js -f style.css -t m -s 5 -e 10
```

In the style.css file:

```
.m-5 { margin: 5px; }
.m-6 { margin: 6px; }
.m-7 { margin: 7px; }
.m-8 { margin: 8px; }
.m-9 { margin: 9px; }
.m-10 { margin: 10px; }
```
