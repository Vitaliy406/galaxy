jobs:
  pr_test:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
    steps:
      - name: git checkout
        uses: actions/checkout@v2
@@ -19,7 +17,7 @@ jobs:
      - name: Create PR
        uses: peter-evans/create-pull-request@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          token: ${{ secrets.CREDENTIALS_GITHUB_PUSH_TOKEN }}
          title: Run PR Test
          commit-message: Run PR Test
          committer: GitHub Action <noreply@github.com>
