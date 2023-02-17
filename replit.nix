{ pkgs }: {
  deps = [
    pkgs.rubyPackages_3_0.yard
    pkgs.nodejs
    pkgs.yarn
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}