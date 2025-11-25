import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getPrivacyPolicy } from "../utils/loaders";
import Loader from "../components/Loader";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface PrivacyPolicyType {
  title: string;
  updatedAtText?: string;
  content: string; // Markdown or HTML from Strapi
}

export default function PrivacyPolicy() {
  const [policy, setPolicy] = useState<PrivacyPolicyType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const res = await getPrivacyPolicy();
        if (res?.data) {
          setPolicy(res.data);
        }
      } catch (err) {
        console.error("Error fetching privacy policy:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicy();
  }, []);

  if (loading) return <Loader />;

  if (!policy)
    return (
      <Layout>
        <div className="text-center py-20">Policy not found.</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-24 py-16 font-[Manrope]">
        <div className="mx-auto bg-white rounded-2xl overflow-hidden">

          {/* Enhanced Header */}
          <div className=" px-8 py-10 md:px-12">
            {/* <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {policy.title}
            </h1>
            {policy.updatedAtText && (
              <p className="text-blue-100 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Last updated: {policy.updatedAtText}
              </p>
            )} */}
          </div>

          {/* Enhanced Content Section */}
          <div className="px-8 py-10 md:px-12 md:py-12">
            <article className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw as any]}
                components={{
                  h1: ({node, ...props}) => (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 pb-3 border-b-2 border-blue-200" {...props} />
                  ),
                  h2: ({node, ...props}) => (
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-3" {...props}>
                      <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                      <span>{props.children}</span>
                    </h2>
                  ),
                  h3: ({node, ...props}) => (
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3" {...props} />
                  ),
                  p: ({node, ...props}) => (
                    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                  ),
                  ul: ({node, ...props}) => (
                    <ul className="space-y-2 mb-6 ml-6" {...props} />
                  ),
                  ol: ({node, ...props}) => (
                    <ol className="space-y-2 mb-6 ml-6 list-decimal" {...props} />
                  ),
                  li: ({node, ...props}) => (
                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span className="flex-1">{props.children}</span>
                    </li>
                  ),
                  table: ({node, ...props}) => (
                    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200" {...props} />
                    </div>
                  ),
                  thead: ({node, ...props}) => (
                    <thead className="bg-gradient-to-r from-blue-50 to-blue-100" {...props} />
                  ),
                  tbody: ({node, ...props}) => (
                    <tbody className="bg-white divide-y divide-gray-200" {...props} />
                  ),
                  tr: ({node, ...props}) => (
                    <tr className="hover:bg-gray-50 transition-colors duration-150" {...props} />
                  ),
                  th: ({node, ...props}) => (
                    <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider" {...props} />
                  ),
                  td: ({node, ...props}) => (
                    <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed" {...props} />
                  ),
                  hr: ({node, ...props}) => (
                    <hr className="my-8 border-t-2 border-gray-200" {...props} />
                  ),
                  strong: ({node, ...props}) => (
                    <strong className="font-bold text-gray-900" {...props} />
                  ),
                  em: ({node, ...props}) => (
                    <em className="italic text-gray-800" {...props} />
                  ),
                  a: ({node, ...props}) => (
                    <a className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors" {...props} />
                  ),
                  code: ({node, inline, ...props}: any) => 
                    inline ? (
                      <code className="bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                    ) : (
                      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4" {...props} />
                    )
                }}
              >
                {policy.content}
              </ReactMarkdown>
            </article>
          </div>

          {/* Footer Section */}
          <div className="bg-gray-50 px-8 py-6 md:px-12 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              For questions about this policy, contact us at{" "}
              <a href="mailto:tickets@pleeth.com" className="text-blue-600 hover:text-blue-700 font-medium">
                tickets@pleeth.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}