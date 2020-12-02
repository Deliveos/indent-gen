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

- Key `-u` or `--units`. Units for padding or margin. Default units is px.
- Toggle `-h` or `--help`. Show help.
