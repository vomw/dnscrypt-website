(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{239:function(e,t,o){"use strict";o.r(t);var r=o(21),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("section",[t("h1",{attrs:{id:"dns-stamps"}},[e._v("DNS Stamps")]),e._v(" "),t("p",[e._v("Server stamps encode all the parameters required to connect to a secure DNS server as a single string."),t("br"),e._v("\nThink about stamps as QR code, but for DNS.")]),e._v(" "),t("h2",{attrs:{id:"online-dns-stamp-calculator"}},[e._v("Online DNS stamp calculator")]),e._v(" "),t("p",[e._v("Stamps can be quickly viewed/modified/created using this "),t("a",{attrs:{href:"https://github.com/jedisct1/vue-dnsstamp"}},[e._v("VueJS component")]),e._v(".")]),e._v(" "),t("p",[e._v("An online demo is accessible here: "),t("a",{attrs:{href:"https://stamps.dnscrypt.info"}},[e._v("https://stamps.dnscrypt.info")])]),e._v(" "),t("p",[e._v("An example list of "),t("a",{attrs:{href:"https://github.com/DNSCrypt/dnscrypt-resolvers/blob/master/v3/public-resolvers.md"}},[e._v("public secure DNS resolvers")]),e._v(", with their DNS stamps.")]),e._v(" "),t("h2",{attrs:{id:"common-definitions"}},[e._v("Common definitions")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("a || b")]),e._v(" is the concatenation of "),t("code",[e._v("a")]),e._v(" and "),t("code",[e._v("b")])]),e._v(" "),t("li",[t("code",[e._v("a | b")]),e._v(" is the result of the logical "),t("code",[e._v("OR")]),e._v(" operation between "),t("code",[e._v("a")]),e._v(" and "),t("code",[e._v("b")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("len(x)")]),e._v(" is a single byte representation of the length of "),t("code",[e._v("x")]),e._v(", in bytes. Strings don’t have to be zero-terminated and do not require invidual encoding.")]),e._v(" "),t("li",[t("code",[e._v("vlen(x)")]),e._v(" is equal to "),t("code",[e._v("len(x)")]),e._v(" if "),t("code",[e._v("x")]),e._v(" is the last element of a set, and "),t("code",[e._v("0x80 | len(x)")]),e._v(" if there are more elements in the set.")]),e._v(" "),t("li",[t("code",[e._v("LP(x)")]),e._v(" is "),t("code",[e._v("len(x) || x")]),e._v(", i.e "),t("code",[e._v("x")]),e._v(" prefixed by its length.")]),e._v(" "),t("li",[t("code",[e._v("VLP(x1, x2, ...xn)")]),e._v(" encodes a set, as "),t("code",[e._v("vlen(x1) || x1 || vlen(x2) || x2 ... || vlen(xn) || xn")]),e._v(". Since "),t("code",[e._v("vlen(xn) == len(xn)")]),e._v(" (length of the last element doesn’t have the high bit set), for a set with a single element, we have "),t("code",[e._v("VLP(x) == LP(x)")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("[ Q ]")]),e._v(" means that "),t("code",[e._v("Q")]),e._v(" is optional.")]),e._v(" "),t("li",[t("code",[e._v("base64url(s)")]),e._v(" is the URL-safe base64 encoding of "),t("code",[e._v("s")]),e._v(". None of the parameters are individually base64-encoded. Base64-encoding is only applied once, on the entire concatenation of all length-prefixed parameters.")])]),e._v(" "),t("h2",{attrs:{id:"encoding-examples%3A"}},[e._v("Encoding examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('LP("10.0.0.1")')]),e._v(" is "),t("code",[e._v("[ 0x08, 0x31, 0x30, 0x2e, 0x30, 0x2e, 0x30, 0x2e, 0x31 ]")])]),e._v(" "),t("li",[t("code",[e._v('VLP("10.0.0.1", "10.0.0.2")')]),e._v(" evaluates to "),t("code",[e._v("[ 0x88, 0x31, 0x30, 0x2e, 0x30, 0x2e, 0x30, 0x2e, 0x31, 0x08, 0x31, 0x30, 0x2e, 0x30, 0x2e, 0x30, 0x2e, 0x32 ]")])]),e._v(" "),t("li",[t("code",[e._v('base64url(VLP("10.0.0.1", "10.0.0.2"))')]),e._v(" is "),t("code",[e._v("iDEwLjAuMC4xCDEwLjAuMC4y")])])]),e._v(" "),t("h2",{attrs:{id:"dnscrypt-stamps"}},[e._v("DNSCrypt stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x01 || props || LP(addr [:port]) || LP(pk) || LP(providerName))\n')])]),e._v(" "),t("p",[t("code",[e._v("0x01")]),e._v(" is the protocol identifier for DNSCrypt.")]),e._v(" "),t("p",[t("code",[e._v("props")]),e._v(" is a little-endian 64 bit value that represents informal properties about the resolver. It is a logical "),t("code",[e._v("OR")]),e._v(" combination of the following values:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("1")]),e._v(": the server supports DNSSEC")]),e._v(" "),t("li",[t("code",[e._v("2")]),e._v(": the server doesn’t keep logs")]),e._v(" "),t("li",[t("code",[e._v("4")]),e._v(": the server doesn’t intentionally block domains")])]),e._v(" "),t("p",[e._v("For example, a server that supports DNSSEC, stores logs, but doesn’t block anything on its own should set "),t("code",[e._v("props")]),e._v(" as the following 8 bytes sequence: "),t("code",[e._v("[ 0x05, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("addr")]),e._v(" is the IP address, as a string, with a port number if the server is not accessible over the standard port for the protocol (443)."),t("br"),e._v("\nIPv6 strings must be included in square brackets: "),t("code",[e._v("[fe80::6d6d:f72c:3ad:60b8]")]),e._v(". Scopes are permitted.")]),e._v(" "),t("p",[t("code",[e._v("pk")]),e._v(" is the DNSCrypt provider’s Ed25519 public key, as 32 raw bytes.")]),e._v(" "),t("p",[t("code",[e._v("providerName")]),e._v(" is the DNSCrypt provider name.")]),e._v(" "),t("h2",{attrs:{id:"dns-over-https-stamps"}},[e._v("DNS-over-HTTPS stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x02 || props || LP(addr) || VLP(hash1, hash2, ...hashn) ||\n                       LP(hostname [:port]) || LP(path)\n                       [ || VLP(bootstrap_ip1, bootstrap_ip2, ...bootstrap_ipn) ])\n')])]),e._v(" "),t("p",[t("code",[e._v("addr")]),e._v(" is the IP address of the server."),t("br"),e._v("\nIt can be an empty string. In that case, the host name will be resolved to an IP address using another resolver.")]),e._v(" "),t("p",[t("code",[e._v("hashi")]),e._v(" is the SHA256 digest of one of the TBS certificate found in the validation chain,"),t("br"),e._v("\ntypically the certificate used to sign the resolver’s certificate. Multiple hashes can"),t("br"),e._v("\nbe provided for seamless rotations.")]),e._v(" "),t("p",[t("code",[e._v("hostname")]),e._v(" is the server host name which will also be used as a SNI name. If the host name contains characters outside the URL-permitted range, these characters should be sent as-is, without any extra encoding (neither URL-encoded nor punycode)."),t("br"),e._v("\nThe port number is optional, and is assumed to be "),t("code",[e._v("443")]),e._v(" if missing.")]),e._v(" "),t("p",[t("code",[e._v("path")]),e._v(" is the absolute URI path, such as "),t("code",[e._v("/dns-query")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("bootstrap_ipi")]),e._v(" are IP addresses of recommended resolvers accessible over standard DNS"),t("br"),e._v("\nin order to resolve "),t("code",[e._v("hostname")]),e._v(". This is optional, and clients can ignore this information.")]),e._v(" "),t("h2",{attrs:{id:"dns-over-tls-stamps"}},[e._v("DNS-over-TLS stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x03 || props || LP(addr) || VLP(hash1, hash2, ...hashn) ||\n                       LP(hostname [:port]) ||\n                       [ || VLP(bootstrap_ip1, bootstrap_ip2, ...bootstrap_ipn) ])\n')])]),e._v(" "),t("p",[t("code",[e._v("addr")]),e._v(" is the IP address of the server."),t("br"),e._v("\nIt can be an empty string. In that case, the host name will be resolved to an IP address using another resolver.")]),e._v(" "),t("p",[e._v("IPv6 strings must be included in square brackets: "),t("code",[e._v("[fe80::6d6d:f72c:3ad:60b8]")]),e._v(". Scopes are permitted.")]),e._v(" "),t("p",[t("code",[e._v("hashi")]),e._v(" is the SHA256 digest of one of the TBS certificate found in the validation chain,"),t("br"),e._v("\ntypically the certificate used to sign the resolver’s certificate.  Multiple hashes can"),t("br"),e._v("\nbe provided for seamless rotations.")]),e._v(" "),t("p",[t("code",[e._v("hostname")]),e._v(" is the server host name which will also be used as a SNI name."),t("br"),e._v("\nThe port number is optional, and is assumed to be "),t("code",[e._v("443")]),e._v(" if missing.")]),e._v(" "),t("p",[t("code",[e._v("bootstrap_ipi")]),e._v(" are IP addresses of recommended resolvers accessible over standard DNS"),t("br"),e._v("\nin order to resolve "),t("code",[e._v("hostname")]),e._v(". This is optional, and clients can ignore this information.")]),e._v(" "),t("h2",{attrs:{id:"dns-over-quic-stamps"}},[e._v("DNS-over-QUIC stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x04 || props || LP(addr) || VLP(hash1, hash2, ...hashn) ||\n                       LP(hostname [:port]) ||\n                       [ || VLP(bootstrap_ip1, bootstrap_ip2, ...bootstrap_ipn) ])\n')])]),e._v(" "),t("p",[t("code",[e._v("addr")]),e._v(" is the IP address of the server."),t("br"),e._v("\nIt can be an empty string. In that case, the host name will be resolved to an IP address using another resolver.")]),e._v(" "),t("p",[e._v("IPv6 strings must be included in square brackets: "),t("code",[e._v("[fe80::6d6d:f72c:3ad:60b8]")]),e._v(". Scopes are permitted.")]),e._v(" "),t("p",[t("code",[e._v("hashi")]),e._v(" is the SHA256 digest of one of the TBS certificate found in the validation chain,"),t("br"),e._v("\ntypically the certificate used to sign the resolver’s certificate.  Multiple hashes can"),t("br"),e._v("\nbe provided for seamless rotations.")]),e._v(" "),t("p",[t("code",[e._v("hostname")]),e._v(" is the server host name which will also be used as a SNI name."),t("br"),e._v("\nThe port number is optional, and is assumed to be "),t("code",[e._v("443")]),e._v(" if missing.")]),e._v(" "),t("p",[t("code",[e._v("bootstrap_ipi")]),e._v(" are IP addresses of recommended resolvers accessible over standard DNS"),t("br"),e._v("\nin order to resolve "),t("code",[e._v("hostname")]),e._v(". This is optional, and clients can ignore this information.")]),e._v(" "),t("h2",{attrs:{id:"oblivious-doh-target-stamps"}},[e._v("Oblivious DoH target stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x05 || props || LP(hostname [:port]) || LP(path))\n')])]),e._v(" "),t("p",[t("code",[e._v("hostname")]),e._v(" is the server host name which, for relays, will also be used as a SNI name. If the host name contains characters outside the URL-permitted range, these characters should be sent as-is, without any extra encoding (neither URL-encoded nor punycode)."),t("br"),e._v("\nThe port number is optional, and is assumed to be "),t("code",[e._v("443")]),e._v(" if missing.")]),e._v(" "),t("p",[t("code",[e._v("path")]),e._v(" is the absolute URI path, such as "),t("code",[e._v("/dns-query")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"anonymized-dnscrypt-relay-stamps"}},[e._v("Anonymized DNSCrypt relay stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x81 || LP(addr))\n')])]),e._v(" "),t("p",[t("code",[e._v("0x81")]),e._v(" is the protocol identifier for a DNSCrypt relay.")]),e._v(" "),t("p",[e._v("addr is the IP address and port, as a string. IPv6 strings must be included in square brackets: "),t("code",[e._v("[fe80::6d6d:f72c:3ad:60b8]:443")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"oblivious-doh-relay-stamps"}},[e._v("Oblivious DoH relay stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x85 || props || LP(addr) || VLP(hash1, hash2, ...hashn) ||\n                       LP(hostname [:port]) || LP(path)\n                       [ || VLP(bootstrap_ip1, bootstrap_ip2, ...bootstrap_ipn) ])\n')])]),e._v(" "),t("p",[t("code",[e._v("0x85")]),e._v(" is the protocol identifier for an oDoH relay.")]),e._v(" "),t("p",[t("code",[e._v("addr")]),e._v(" is the IP address of the server."),t("br"),e._v("\nIt can be an empty string. In that case, the host name will be resolved to an IP address using another resolver.")]),e._v(" "),t("p",[t("code",[e._v("hashi")]),e._v(" is the SHA256 digest of one of the TBS certificate found in the validation chain,"),t("br"),e._v("\ntypically the certificate used to sign the resolver’s certificate.  Multiple hashes can"),t("br"),e._v("\nbe provided for seamless rotations.")]),e._v(" "),t("p",[t("code",[e._v("hostname")]),e._v(" is the server host name which, for relays, will also be used as a SNI name. If the host name contains characters outside the URL-permitted range, these characters should be sent as-is, without any extra encoding (neither URL-encoded nor punycode)."),t("br"),e._v("\nThe port number is optional, and is assumed to be "),t("code",[e._v("443")]),e._v(" if missing.")]),e._v(" "),t("p",[t("code",[e._v("path")]),e._v(" is the absolute URI path, such as "),t("code",[e._v("/dns-query")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("bootstrap_ipi")]),e._v(" are IP addresses of recommended resolvers accessible over standard DNS in order to resolve "),t("code",[e._v("hostname")]),e._v(" and get the oDoH target public key. This is optional, and clients can ignore this information.")]),e._v(" "),t("h2",{attrs:{id:"plain-dns-stamps"}},[e._v("Plain DNS stamps")]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-text"},[e._v('"sdns://" || base64url(0x00 || props || LP(addr [:port]))\n')])]),e._v(" "),t("p",[t("code",[e._v("addr")]),e._v(" is the IP address of the server. IPv6 strings must be included in square brackets: "),t("code",[e._v("[fe80::6d6d:f72c:3ad:60b8]")]),e._v("."),t("br"),e._v("\nScopes are permitted.")]),e._v(" "),t("h2",{attrs:{id:"implementations"}},[e._v("Implementations")]),e._v(" "),t("h3",{attrs:{id:"libraries"}},[e._v("Libraries")]),e._v(" "),t("ul",[t("li",[e._v("A "),t("a",{attrs:{href:"https://github.com/jedisct1/go-dnsstamps"}},[e._v("Go implementation of DNS stamps")])]),e._v(" "),t("li",[e._v("Another "),t("a",{attrs:{href:"https://github.com/ameshkov/dnsstamps"}},[e._v("Go implementation of DNS stamps")])]),e._v(" "),t("li",[e._v("A "),t("a",{attrs:{href:"https://github.com/bitbeans/DnsCrypt.Toolbox/tree/master/DnsCrypt.Stamps"}},[e._v(".NET implementation of DNS stamps")]),e._v(" by @bitbeans")]),e._v(" "),t("li",[e._v("A "),t("a",{attrs:{href:"https://github.com/jedisct1/rust-dnsstamps/"}},[e._v("Rust implementation of DNS stamps")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/LinkTed/dns-stamp-parser"}},[e._v("Another Rust implementation")])]),e._v(" "),t("li",[e._v("A "),t("a",{attrs:{href:"https://github.com/chrisss404/python-dnsstamps"}},[e._v("Python implementation of DNS stamps")])]),e._v(" "),t("li",[e._v("A "),t("a",{attrs:{href:"https://github.com/rs/node-dnsstamp"}},[e._v("Javascript implementation of DNS stamps")])]),e._v(" "),t("li",[e._v("A "),t("a",{attrs:{href:"https://github.com/x13a/dnsstamp-swift"}},[e._v("Swift implementation of DNS stamps")])])]),e._v(" "),t("h3",{attrs:{id:"applications"}},[e._v("Applications")]),e._v(" "),t("p",[e._v("DNS stamps are known to be used in the following applications:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/jedisct1/dnscrypt-proxy"}},[e._v("dnscrypt-proxy")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cofyc/dnscrypt-wrapper"}},[e._v("dnscrypt-wrapper")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jedisct1/encrypted-dns-server"}},[e._v("encrypted-dns-server")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/instantsc/SimpleDnsCrypt"}},[e._v("simple dnscrypt")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/softwareengineer1/YourFriendlyDNS"}},[e._v("yourfriendlydns")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://adguard.com"}},[e._v("adguard")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.nextdns.io"}},[e._v("nextdns")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://yogadns.com"}},[e._v("yogadns")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Texnomic/SecureDNS"}},[e._v("Texnomic SecureDNS")])])]),e._v(" "),t("h3",{attrs:{id:"servers-lists-as-dns-stamps"}},[e._v("Servers lists as DNS stamps")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.quad9.net/quad9-resolvers.md"}},[e._v("Quad9 resolvers list")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cleanbrowsing.org/dnscrypt"}},[e._v("CleanBrowsing DNSCrypt")]),e._v(" and "),t("a",{attrs:{href:"https://cleanbrowsing.org/dnsoverhttps"}},[e._v("DoH")]),e._v(" servers")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://download.dnscrypt.info/resolvers-list/v3/public-resolvers.md"}},[e._v("Public resolvers list")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://download.dnscrypt.info/resolvers-list/v3/opennic.md"}},[e._v("OpenNIC resolvers list")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://download.dnscrypt.info/resolvers-list/v3/parental-control.md"}},[e._v("Parental control resolvers list")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://download.dnscrypt.info/resolvers-list/v3/relays.md"}},[e._v("Anonymized DNS relays list")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://download.dnscrypt.info/resolvers-list/v3/odoh-servers.md"}},[e._v("Oblivious DoH target servers list")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://download.dnscrypt.info/resolvers-list/v3/odoh-relays.md"}},[e._v("Oblivious DoH proxies list")])])])])}],!1,null,null,null);t.default=component.exports}}]);