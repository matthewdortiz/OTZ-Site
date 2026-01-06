interface BackendArchitectureBlockProps {
  showBackendArchitecture?: boolean;
}

export function BackendArchitectureBlock({ showBackendArchitecture }: BackendArchitectureBlockProps) {
  if (!showBackendArchitecture) return null;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Column 1: Secure CRM Integration */}
        <div 
          className="border rounded-xl p-5 sm:p-6"
          style={{ 
            borderColor: 'var(--blueprint)',
            backgroundColor: '#ffffff'
          }}
        >
          <h3 
            style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              lineHeight: '1.3',
              color: 'var(--ink)',
              marginBottom: 'clamp(10px, 2vw, 14px)'
            }}
          >
            Secure CRM Integration
          </h3>
          <p 
            style={{ 
              fontSize: 'clamp(13px, 2vw, 14px)',
              lineHeight: '1.5',
              color: '#3f3f46'
            }}
          >
            The AI voice agent integrates with Smart Health Dental's CRM and enrollment systems via authenticated APIs. Enrollment data is securely retrieved at call start and scoped to only the fields required for verification and support workflows.
          </p>
        </div>

        {/* Column 2: Call Context & Flow Logic */}
        <div 
          className="border rounded-xl p-5 sm:p-6"
          style={{ 
            borderColor: 'var(--blueprint)',
            backgroundColor: '#ffffff'
          }}
        >
          <h3 
            style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              lineHeight: '1.3',
              color: 'var(--ink)',
              marginBottom: 'clamp(10px, 2vw, 14px)'
            }}
          >
            Call Context & Flow Logic
          </h3>
          <ul 
            style={{ 
              fontSize: 'clamp(13px, 2vw, 14px)',
              lineHeight: '1.5',
              color: '#3f3f46',
              listStyleType: 'disc',
              paddingLeft: '20px'
            }}
          >
            <li style={{ marginBottom: '6px' }}>Short-lived, in-memory call context per interaction</li>
            <li style={{ marginBottom: '6px' }}>Dynamic script population using live enrollment data</li>
            <li style={{ marginBottom: '6px' }}>Conditional logic by plan type, billing method, and state</li>
            <li>Multi-step verification continuity without persistent storage</li>
          </ul>
        </div>

        {/* Column 3: Script Execution & Compliance Control */}
        <div 
          className="border rounded-xl p-5 sm:p-6"
          style={{ 
            borderColor: 'var(--blueprint)',
            backgroundColor: '#ffffff'
          }}
        >
          <h3 
            style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              lineHeight: '1.3',
              color: 'var(--ink)',
              marginBottom: 'clamp(10px, 2vw, 14px)'
            }}
          >
            Script Execution & Compliance Control
          </h3>
          <p 
            style={{ 
              fontSize: 'clamp(13px, 2vw, 14px)',
              lineHeight: '1.5',
              color: '#3f3f46'
            }}
          >
            Verification and customer service flows are executed using deterministic, script-driven logic. Required disclosures are delivered verbatim, while branching paths adapt to the customer's plan configuration and responses.
          </p>
        </div>
      </div>

      {/* 2-column bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* CRM Updates & Audit Logging */}
        <div 
          className="border rounded-xl p-5 sm:p-6"
          style={{ 
            borderColor: 'var(--blueprint)',
            backgroundColor: '#ffffff'
          }}
        >
          <h3 
            style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              lineHeight: '1.3',
              color: 'var(--ink)',
              marginBottom: 'clamp(10px, 2vw, 14px)'
            }}
          >
            CRM Updates & Audit Logging
          </h3>
          <ul 
            style={{ 
              fontSize: 'clamp(13px, 2vw, 14px)',
              lineHeight: '1.5',
              color: '#3f3f46',
              listStyleType: 'disc',
              paddingLeft: '20px'
            }}
          >
            <li style={{ marginBottom: '6px' }}>Verification and consent status written back to CRM</li>
            <li style={{ marginBottom: '6px' }}>Call disposition and escalation flags recorded</li>
            <li style={{ marginBottom: '6px' }}>Secure linkage to call recordings</li>
            <li>Compliance-ready audit trail per interaction</li>
          </ul>
        </div>

        {/* Security & Data Handling */}
        <div 
          className="border rounded-xl p-5 sm:p-6"
          style={{ 
            borderColor: 'var(--blueprint)',
            backgroundColor: '#ffffff'
          }}
        >
          <h3 
            style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              lineHeight: '1.3',
              color: 'var(--ink)',
              marginBottom: 'clamp(10px, 2vw, 14px)'
            }}
          >
            Security & Data Handling
          </h3>
          <ul 
            style={{ 
              fontSize: 'clamp(13px, 2vw, 14px)',
              lineHeight: '1.5',
              color: '#3f3f46',
              listStyleType: 'disc',
              paddingLeft: '20px'
            }}
          >
            <li style={{ marginBottom: '6px' }}>Encrypted API communication</li>
            <li style={{ marginBottom: '6px' }}>Scoped and rotated credentials</li>
            <li style={{ marginBottom: '6px' }}>Ephemeral handling of sensitive data</li>
            <li>Controlled escalation to human coordinators</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
